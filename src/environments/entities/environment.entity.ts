import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  orderBy: {
    rank: 'DESC',
    name: 'ASC',
  },
})
export class Environment {
  @PrimaryColumn('varying character')
  name: string;

  @Column({
    type: 'integer',
    default: 0,
  })
  rank: number;

  @Column({
    type: 'varying character',
    nullable: false,
  })
  ocp_tenant_domain: string;

  @Column({
    type: 'varying character',
    nullable: false,
  })
  ocp_namespace_front: string;

  @Column({
    type: 'varying character',
    nullable: false,
  })
  ocp_namespace_backend: string;

  @Column({
    type: 'varying character',
    nullable: false,
  })
  ocp_namespace_restricted: string;

  @Column({
    type: 'varying character',
    nullable: true,
  })
  ocp_namespace_public?: string;

  @Column({
    type: 'varying character',
    nullable: true,
  })
  mq_url?: string;

  @Column({
    type: 'varying character',
    nullable: true,
  })
  mq_namespace?: string;

  @Column({
    type: 'varying character',
    nullable: true,
  })
  db_url?: string;

  @Column({
    type: 'varying character',
    nullable: true,
  })
  default_spring_profiles?: string;

  @Column({
    type: 'varying character',
    nullable: true,
  })
  login_url?: string;

  @Column({
    type: 'varying character',
    nullable: true,
  })
  gateway_url?: string;

  @Column({
    type: 'varying character',
    nullable: true,
  })
  comment?: string;

  @CreateDateColumn({ select: false })
  created_at?: Date;

  @UpdateDateColumn({ select: false })
  updated_at?: Date;
}
