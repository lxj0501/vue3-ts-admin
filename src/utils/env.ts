export function getAppEnvConfig() {
  return import.meta.env as unknown as GlobalEnvConfig;
}
