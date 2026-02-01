# Guia Rápido de Deploy no Vercel

## 🚀 Deploy Automático (Recomendado)

### 1. Conectar ao Vercel
1. Acesse https://vercel.com/login
2. Faça login com sua conta GitHub
3. Clique em "Add New Project"
4. Importe este repositório `devpeu83/siteerectusplus`
5. Clique em "Deploy"

**Pronto!** Seu site estará no ar em poucos minutos em um domínio Vercel gratuito (ex: `siteerectusplus.vercel.app`)

### 2. Configurar Domínio Personalizado

Após o deploy inicial:

1. Vá para o projeto no Vercel Dashboard
2. Clique em "Settings" → "Domains"
3. Clique em "Add Domain"
4. Digite seu domínio (ex: `meusite.com`)
5. Siga as instruções para configurar o DNS

#### Opção A: Usar Nameservers do Vercel (Mais Fácil)
No seu registrador de domínio, configure os nameservers:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

#### Opção B: Usar seu DNS Atual
Adicione os seguintes registros DNS:

**Para domínio raiz (exemplo.com):**
```
Tipo: A
Nome: @
Valor: 76.76.21.21
```

**Para subdomínio (www.exemplo.com):**
```
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

### 3. Ativar Speed Insights

O Speed Insights já está integrado! Após o deploy:

1. Acesse o Vercel Dashboard
2. Clique no seu projeto
3. Vá para a aba "Speed Insights"
4. Os dados começarão a aparecer assim que houver visitantes

## 📋 Checklist de Deploy

- [x] ✅ Código pronto para produção
- [x] ✅ Dependências instaladas
- [x] ✅ Build testado e funcionando
- [x] ✅ Configuração do Vercel criada
- [x] ✅ Headers de segurança configurados
- [x] ✅ Speed Insights integrado
- [ ] ⏳ Deploy no Vercel (você precisa fazer)
- [ ] ⏳ Domínio configurado (você precisa fazer)

## 🔧 Deploy via CLI (Alternativo)

Se preferir usar a linha de comando:

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy em produção
vercel --prod
```

## 🌐 Verificar o Site

Depois do deploy, teste:

1. ✅ Site carrega corretamente
2. ✅ SSL/HTTPS funcionando
3. ✅ Domínio resolvendo corretamente
4. ✅ Speed Insights coletando dados

## 📊 Monitoramento

### Speed Insights
- Acesse a aba "Speed Insights" no Vercel Dashboard
- Veja métricas em tempo real:
  - LCP (Largest Contentful Paint)
  - FID (First Input Delay)
  - CLS (Cumulative Layout Shift)
  - FCP (First Contentful Paint)
  - TTFB (Time to First Byte)

### Logs de Deploy
- Acesse a aba "Deployments"
- Clique em qualquer deploy para ver logs detalhados

## 🔄 Deploys Automáticos

Após conectar o GitHub ao Vercel:
- ✅ Cada push na branch `main` faz deploy automático
- ✅ Pull Requests criam deploys de preview
- ✅ Rollback instantâneo se necessário

## 💡 Dicas

1. **DNS demora**: Propagação DNS pode levar até 48h (geralmente 5-30 minutos)
2. **Preview URLs**: Cada commit gera uma URL de preview para testar
3. **Variáveis de Ambiente**: Configure em Settings → Environment Variables
4. **SSL Automático**: Vercel gera e renova certificados SSL automaticamente

## ❓ Problemas Comuns

### Domínio não funciona
- Verifique os registros DNS no seu registrador
- Use `dig seudominio.com` para verificar DNS
- Aguarde propagação (pode levar horas)

### Build falha
- Verifique os logs no Vercel Dashboard
- Certifique-se que todas as dependências estão no package.json

### Speed Insights sem dados
- Aguarde 5-10 minutos após primeiro acesso
- Precisa ter visitantes reais no site
- Verifique se o pacote está instalado: `@vercel/speed-insights`

## 📞 Suporte

- Vercel Support: https://vercel.com/support
- Documentação: https://vercel.com/docs
- Este projeto: https://github.com/devpeu83/siteerectusplus

---

**Status:** ✅ Tudo configurado e pronto para deploy!
