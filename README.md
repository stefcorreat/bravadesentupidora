# Brava Desentupidora SP

Site institucional e de SEO local em Next.js, preparado para publicação na Vercel.

## Estrutura

- Santo Amaro como núcleo territorial principal, incluindo bairros destacados em fonte oficial da Prefeitura de São Paulo.
- Santo André como segundo núcleo estratégico, com páginas para seus 112 bairros oficiais.
- São Bernardo do Campo com páginas para seus 34 bairros oficiais.
- 35 páginas combinando os sete serviços principais com cinco núcleos prioritários.
- Mais de 250 URLs públicas no sitemap, incluindo todas as localidades solicitadas.
- Páginas de serviços, intenções de busca, artigos e áreas atendidas.
- Sitemap, robots, canonical, Open Graph e JSON-LD.
- CTAs de WhatsApp e ligação.
- Imagens profissionais distribuídas pelas páginas do site.

## Configuração antes da publicação

O número de atendimento para ligações e WhatsApp é definido em `lib/site.ts`. Configure o domínio e a indexação na Vercel:

```env
SITE_URL=https://desentupidorabrava24h.com.br
SITE_INDEXING=true
```

## Desenvolvimento

```bash
pnpm install
pnpm dev
pnpm audit
pnpm build
```

## Fontes territoriais

- Prefeitura de São Paulo, Subprefeitura de Santo Amaro: distritos Santo Amaro, Campo Belo e Campo Grande.
- Caderno regional da Subprefeitura de Santo Amaro para bairros destacados.
- Prefeitura de Santo André, SIGA: 112 bairros oficiais.
- Prefeitura de São Bernardo do Campo: 34 bairros oficiais.

As páginas não afirmam existência de filial física em cada localidade. A cobertura deve ser confirmada no atendimento.
