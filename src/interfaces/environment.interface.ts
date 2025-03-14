export interface Environment {
  name: string;
  rank: number;
  ocp_tenant_domain: string;
  ocp_namespace_front: string;
  ocp_namespace_backend: string;
  ocp_namespace_restricted: string;
  ocp_namespace_public?: string;
  mq_url?: string;
  mq_namespace?: string;
  db_url?: string;
  default_spring_profiles?: string;
  login_url?: string;
  gateway_url?: string;
  comment?: string;
}
