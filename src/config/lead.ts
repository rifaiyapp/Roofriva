// AUTO-SYNCED public routing IDs.
export const leadConfig = {
  projectId: 'site-starter',
  formId: 'site-starter-lead',
  timeoutMs: 15000,
};

export function hasLeadService() {
  return Boolean(leadConfig.projectId && leadConfig.formId);
}
