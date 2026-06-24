#!/usr/bin/env bash
set -euo pipefail

force=false

usage() {
  printf 'Usage: %s [--force]\n' "$0"
  printf 'Creates local .env files and generated Yivi runtime secrets.\n'
  printf 'Existing files are skipped unless --force is provided.\n'
}

while [ "$#" -gt 0 ]; do
  case "$1" in
    --force|--regenerate)
      force=true
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      usage >&2
      exit 2
      ;;
  esac
  shift
done

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
provider_env="$repo_root/yivi-consent-node/.env"
provider_example="$repo_root/yivi-consent-node/.env.example"
kratos_env="$repo_root/examples/kratos-yivi/.env"
kratos_example="$repo_root/examples/kratos-yivi/.env.example"
yivi_runtime_dir="$repo_root/yivi-consent-node/runtime/yivi"

random_urlsafe() {
  openssl rand -base64 "$1" | tr '+/' '-_' | tr -d '=\n'
}

random_hex() {
  openssl rand -hex "$1"
}

provider_env_written=false
kratos_env_written=false

copy_env() {
  local source="$1"
  local target="$2"
  if [ -f "$target" ] && [ "$force" != true ]; then
    printf 'Skipped existing %s\n' "${target#$repo_root/}"
    return 1
  fi
  cp "$source" "$target"
  printf 'Wrote %s\n' "${target#$repo_root/}"
  return 0
}

replace_in_file() {
  local file="$1"
  local key="$2"
  local value="$3"
  local escaped
  escaped="$(printf '%s' "$value" | sed 's/[\/&]/\\&/g')"
  sed -i "s/$key/$escaped/g" "$file"
}

write_if_missing() {
  local target="$1"
  local description="$2"
  if [ -f "$target" ] && [ "$force" != true ]; then
    printf 'Skipped existing %s\n' "${target#$repo_root/}"
    return 1
  fi
  mkdir -p "$(dirname "$target")"
  printf 'Wrote %s\n' "$description"
  return 0
}

mkdir -p "$yivi_runtime_dir"

if copy_env "$provider_example" "$provider_env"; then
  provider_env_written=true
fi
if copy_env "$kratos_example" "$kratos_env"; then
  kratos_env_written=true
fi

hydra_password="$(random_urlsafe 24)"
hydra_secret="$(random_urlsafe 32)"
hydra_salt="$(random_urlsafe 32)"
kratos_password="$(random_urlsafe 24)"
kratos_cookie="$(random_urlsafe 32)"
kratos_cipher="$(random_urlsafe 24)"
kratos_ui_cookie="$(random_urlsafe 32)"
kratos_ui_csrf="$(random_urlsafe 32)"
yivi_requester_token="$(random_urlsafe 32)"

if [ "$provider_env_written" = true ]; then
  replace_in_file "$provider_env" "CHANGE_ME_GENERATED_HYDRA_POSTGRES_PASSWORD" "$hydra_password"
  replace_in_file "$provider_env" "CHANGE_ME_GENERATED_HYDRA_SYSTEM_SECRET" "$hydra_secret"
  replace_in_file "$provider_env" "CHANGE_ME_GENERATED_HYDRA_PAIRWISE_SALT" "$hydra_salt"
  replace_in_file "$provider_env" "CHANGE_ME_GENERATED_YIVI_REQUESTER_TOKEN" "$yivi_requester_token"
fi

if [ "$kratos_env_written" = true ]; then
  replace_in_file "$kratos_env" "CHANGE_ME_GENERATED_KRATOS_POSTGRES_PASSWORD" "$kratos_password"
  replace_in_file "$kratos_env" "CHANGE_ME_GENERATED_KRATOS_UI_COOKIE_SECRET" "$kratos_ui_cookie"
  replace_in_file "$kratos_env" "CHANGE_ME_GENERATED_KRATOS_UI_CSRF_SECRET" "$kratos_ui_csrf"
  replace_in_file "$kratos_env" "CHANGE_ME_GENERATED_KRATOS_COOKIE_SECRET" "$kratos_cookie"
  replace_in_file "$kratos_env" "CHANGE_ME_GENERATED_32_BYTE_KRATOS_CIPHER_SECRET" "$kratos_cipher"
fi

requester_config="$yivi_runtime_dir/irmaserver.json"
if write_if_missing "$requester_config" "Yivi requester config"; then
  cat > "$requester_config" <<JSON
{
  "no_auth": false,
  "requestors": {
    "oryhydra": {
      "auth_method": "token",
      "key": "$yivi_requester_token",
      "disclose_perms": [
        "*"
      ]
    }
  }
}
JSON
fi

private_key="$yivi_runtime_dir/private.pem"
public_key="$yivi_runtime_dir/public.pem"
if [ "$force" = true ] || [ ! -f "$private_key" ] || [ ! -f "$public_key" ]; then
  openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:4096 -out "$private_key" >/dev/null 2>&1
  openssl rsa -in "$private_key" -pubout -out "$public_key" >/dev/null 2>&1
  printf 'Wrote Yivi JWT signing keys\n'
else
  printf 'Skipped existing yivi-consent-node/runtime/yivi/private.pem\n'
  printf 'Skipped existing yivi-consent-node/runtime/yivi/public.pem\n'
fi

printf 'Local configuration is ready. Secret values were not printed.\n'
