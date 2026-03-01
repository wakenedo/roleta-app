"use client";
import React from "react";
import { Header } from "@/components/Header";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { Footer } from "@/components/Footer";

const TermsOfService: React.FC = () => {
  const { user } = useAuth();
  const { tenant } = useTenant();

  return (
    <>
      <Header user={user} tenantId={tenant?.id} />
      <div className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 text-slate-800 font-sans">
        <main className="relative z-10 max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <article className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 mt-3 shadow-2xl">
            <header className="mb-6">
              <h1 className="text-3xl font-semibold text-slate-900">
                Termos de Serviço
              </h1>
              <p className="mt-2 text-sm text-slate-700">
                Última atualização: <strong>12 de agosto de 2025</strong>
              </p>
            </header>

            <section className="space-y-4 text-sm text-slate-800">
              <p>
                Estes Termos de Serviço regem o uso do aplicativo/site
                <strong>PROMOBET</strong> doravante: Plataforma, nós, nosso. Ao
                criar uma conta ou usar a Plataforma, você concorda com estes
                Termos.
              </p>

              <h2 className="text-lg font-medium text-slate-900 mt-4">
                1. Descrição do serviço
              </h2>
              <p>
                A Plataforma oferece uma experiência gamificada (ex.: roleta,
                slots) para descoberta de produtos através de links de
                afiliados. A Plataforma pode exibir ofertas, promover produtos
                de programas de afiliados e redirecionar usuários para
                varejistas terceirizados.
              </p>

              <h2 className="text-lg font-medium text-slate-900 mt-4">
                2. Divulgação de afiliados
              </h2>
              <p>
                Alguns links presentes na Plataforma são links de afiliado — ou
                seja, podemos receber comissão caso você efetue compras através
                deles. Sempre deixamos essa relação comercial explícita quando
                aplicável. É responsabilidade do usuário verificar termos,
                preços e políticas diretamente no site do parceiro.
              </p>
              <p className="text-xs text-slate-500">
                Fontes de boas práticas para divulgação: recomendações de
                transparência e divulgação de links de afiliados.
              </p>

              <h2 className="text-lg font-medium text-slate-900 mt-4">
                3. Dados pessoais & privacidade
              </h2>
              <p>
                Tratamos dados pessoais em conformidade com a Lei Geral de
                Proteção de Dados (LGPD). Informações sobre quais dados
                coletamos, finalidades, base legal, tempo de retenção, direitos
                do titular (acesso, correção, exclusão, portabilidade, revogação
                do consentimento) e contato do Encarregado de Dados (DPO)
                constam em nossa Política de Privacidade.
              </p>
              <p className="text-xs text-slate-500">
                Consulte a LGPD para obrigações e direitos relacionados ao
                tratamento de dados.
              </p>

              <h2 className="text-lg font-medium text-slate-900 mt-4">
                4. Relação com consumidores e direito de arrependimento
              </h2>
              <p>
                Quando o usuário efetuar compras diretamente em varejistas
                parceiros, as regras de consumo aplicáveis (incluindo direito de
                arrependimento, quando previsto) são as do próprio varejista e
                da legislação brasileira (Código de Defesa do Consumidor). A
                Plataforma não é vendedora dos produtos listados, salvo quando
                explicitamente informado.
              </p>
              <p className="text-xs text-slate-500">
                O CDC regula relações de consumo e protege direitos do
                consumidor no comércio eletrônico.
              </p>

              <h2 className="text-lg font-medium text-slate-900 mt-4">
                5. Regras de participação / elegibilidade
              </h2>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  É necessário ter ≥ 18 anos (ou a maioridade aplicável em sua
                  jurisdição).
                </li>
                <li>
                  Não é permitido uso fraudulento, múltiplas contas para burlar
                  limites ou manipular resultados.
                </li>
                <li>
                  Reservamo-nos o direito de suspender/encerrar contas por
                  violação destes Termos.
                </li>
              </ul>

              <h2 className="text-lg font-medium text-slate-900 mt-4">
                6. Prêmios, cashback e entregas
              </h2>
              <p>
                Caso a Plataforma ofereça prêmios ou cashback, as regras
                específicas para cada promoção serão publicadas no regulamento
                da promoção. A responsabilidade pela entrega de produtos
                adquiridos via parceiro é do próprio parceiro/varejista, salvo
                se indicado o contrário.
              </p>

              <h2 className="text-lg font-medium text-slate-900 mt-4">
                7. Conteúdo e propriedade intelectual
              </h2>
              <p>
                Todo conteúdo da Plataforma (textos, imagens, layout, código) é
                protegido por direitos autorais. É proibida reprodução não
                autorizada. Usuários concedem à Plataforma licença não exclusiva
                para usar conteúdo que publiquem, conforme Política de Uso.
              </p>

              <h2 className="text-lg font-medium text-slate-900 mt-4">
                8. Limitação de responsabilidade
              </h2>
              <p>
                Na máxima extensão permitida por lei, a Plataforma não será
                responsável por danos indiretos, especiais ou consequenciais,
                nem por perdas de receita relacionadas ao uso da Plataforma ou a
                transações feitas com terceiros.
              </p>

              <h2 className="text-lg font-medium text-slate-900 mt-4">
                9. Links e serviços de terceiros
              </h2>
              <p>
                A Plataforma pode conter links para sites de terceiros
                (varejistas, redes de afiliados, ferramentas). Não nos
                responsabilizamos por práticas, políticas ou conteúdo desses
                terceiros.
              </p>

              <h2 className="text-lg font-medium text-slate-900 mt-4">
                10. Publicidade e normas publicitárias
              </h2>
              <p>
                A publicidade veiculada na Plataforma deve seguir as normas
                aplicáveis no Brasil — incluindo a necessidade de identificação
                clara de conteúdo patrocinado ou publicitário. Diretrizes de
                publicidade digital e de influenciadores do CONAR orientam
                transparência e identificação.
              </p>
              <p className="text-xs text-slate-500">
                Diretrizes e práticas publicitárias aplicáveis no Brasil.
              </p>

              <h2 className="text-lg font-medium text-slate-900 mt-4">
                11. Modificações nos Termos
              </h2>
              <p>
                Podemos alterar estes Termos; alterações relevantes serão
                comunicadas com antecedência razoável na Plataforma. O uso
                continuado após atualização implica aceitação dos novos termos.
              </p>

              <h2 className="text-lg font-medium text-slate-900 mt-4">
                12. Lei aplicável e foro
              </h2>
              <p>
                Estes Termos são regidos pelas leis brasileiras. Para
                controvérsias, fica eleito o foro da cidade de Cotia, Estado São
                Paulo, com renúncia a qualquer outro, salvo disposição legal em
                contrário.
              </p>

              <h2 className="text-lg font-medium text-slate-900 mt-4">
                13. Contato
              </h2>
              <p>
                Dúvidas ou solicitações relativas a estes Termos, Dados Pessoais
                ou reclamações podem ser dirigidas a:
              </p>
              <p className="text-sm text-slate-700">
                PROMOBET — Email:{" "}
                <a className="underline" href="mailto:afiliapromo@gmail.com">
                  afiliapromo@gmail.com
                </a>
              </p>

              <footer className="mt-6 text-xs text-slate-500">
                <p>
                  Este documento é um modelo genérico. Não substitui
                  aconselhamento jurídico específico.
                </p>
              </footer>
            </section>
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;
