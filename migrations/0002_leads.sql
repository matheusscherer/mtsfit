create table if not exists leads (
  id serial primary key,
  name text not null,
  email text not null,
  instagram text,
  goal text,
  created_at timestamptz not null default now()
);
create unique index if not exists leads_email_idx on leads (email);
