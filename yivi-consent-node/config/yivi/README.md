# Yivi Runtime Files

Tracked files in this directory are templates only. Run `scripts/setup-local-env.sh`
from the repository root to generate the real local requester config and JWT
signing keys under `yivi-consent-node/runtime/yivi/`.

Generated runtime files are ignored and must not be committed:

- `yivi-consent-node/runtime/yivi/irmaserver.json`
- `yivi-consent-node/runtime/yivi/private.pem`
- `yivi-consent-node/runtime/yivi/public.pem`
