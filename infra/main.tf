# Configuração de Infraestrutura como Código (IaC) - Gerenciador de Agendamentos
# Provedores: Vercel (Frontend/Backend) e Supabase/PostgreSQL (Banco de Dados)

terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 1.0"
    }
  }
}

provider "vercel" {
  api_token = var.vercel_api_token
}

# 1. Definição do Projeto na Vercel (Monorepo)
resource "vercel_project" "agendamentos_project" {
  name      = "projeto-agendamentos"
  framework = "nextjs"
  
  git_repository = {
    type = "github"
    repo = "A-Mafioletti/Gerenciador-de-Agendamentos"
  }
}

# 2. Variáveis de Ambiente Injetadas na Infraestrutura (Supabase)
resource "vercel_project_environment_variable" "db_url" {
  project_id = vercel_project.agendamentos_project.id
  key        = "DATABASE_URL"
  value      = var.supabase_db_url
  target     = ["production", "preview", "development"]
}

resource "vercel_project_environment_variable" "direct_url" {
  project_id = vercel_project.agendamentos_project.id
  key        = "DIRECT_URL"
  value      = var.supabase_direct_url
  target     = ["production", "preview", "development"]
}