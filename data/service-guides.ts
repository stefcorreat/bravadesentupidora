type ServiceGuide = {
  sections: { heading: string; text: string }[];
  faq: { q: string; a: string }[];
};

export const serviceGuides = {
  "desentupimento-de-pia": {
    sections: [
      { heading: "A água demora a sair da cuba?", text: "Se só a pia ficou lenta, conte se é a da cozinha, do banheiro ou da área de serviço. Na cozinha, gordura e restos de comida podem se acumular no sifão ou no trecho seguinte do cano. No banheiro, fios de cabelo e resíduos de sabonete são pistas comuns." },
      { heading: "O que o técnico verifica debaixo da pia", text: "A equipe avalia se o bloqueio está no sifão, no ramal da parede ou em outro trecho. Informe se há vazamento no armário ou se a água volta pela segunda cuba, quando houver. Esses sinais ajudam a orientar a inspeção." }
    ],
    faq: [
      { q: "Por que a água volta pela outra cuba?", a: "Em pias duplas, as cubas podem compartilhar parte da saída de água. O retorno pela outra cuba pode apontar para um bloqueio depois da junção. O técnico precisa verificar o ponto." },
      { q: "Devo desmontar o sifão antes da visita?", a: "Não é necessário. Se houver água parada ou vazamento, suspenda o uso e explique o que está acontecendo à equipe." }
    ]
  },
  "desentupimento-de-vaso-sanitario": {
    sections: [
      { heading: "Deu descarga e a água subiu? Não acione de novo", text: "Pare de usar o vaso se o nível estiver alto ou subir a cada descarga. Se caiu um brinquedo, pano, lenço umedecido ou outro objeto, avise a equipe. Essa informação muda o que o técnico precisa verificar antes de tentar liberar a passagem." },
      { heading: "O problema é só no vaso ou também no ralo?", text: "Quando só o vaso apresenta lentidão, o técnico começa avaliando a saída da peça e seu ramal. Se a descarga também faz o ralo do box borbulhar, ou se a água volta em outro banheiro, informe isso no chamado. Pode haver uma obstrução em um trecho compartilhado." }
    ],
    faq: [
      { q: "Precisa retirar o vaso para desentupir?", a: "Depende de onde está o bloqueio e do acesso. O técnico avalia se consegue trabalhar pelo próprio vaso. Se precisar remover a peça, explica a intervenção antes de iniciar." },
      { q: "Como desentupir o vaso sem piorar o problema?", a: "Se houver muita água no vaso, pare de dar descarga. Evite produtos corrosivos e não tente empurrar objetos para dentro. Informe o que aconteceu para a equipe orientar a visita." }
    ]
  },
  "desentupimento-de-ralo": {
    sections: [
      { heading: "O ralo parou no banho ou na chuva?", text: "Conte se a água empoça no box, no quintal ou na área de serviço. Cabelo e resíduos de sabonete podem afetar o ralo do banheiro. Folhas e terra podem prejudicar o escoamento externo, especialmente quando o problema aparece na chuva." },
      { heading: "Quando a água volta sem você usar o ralo", text: "Se o retorno aparece ao ligar a máquina de lavar, abrir a torneira ou dar descarga, avise de onde vem a água e o que estava em uso. Isso ajuda a equipe a verificar se o bloqueio fica no próprio ralo ou num trecho que recebe água de outros pontos." }
    ],
    faq: [
      { q: "Mau cheiro no ralo sempre quer dizer entupimento?", a: "Não. Mau cheiro também pode ocorrer quando o fecho hídrico seca. Se houver água parada ou retorno, vale informar esses sinais à equipe para avaliação." },
      { q: "Vocês avaliam ralo de quintal?", a: "Sim. Conte se o problema acontece apenas com chuva ou também quando você usa água no imóvel." }
    ]
  },
  "desentupimento-de-esgoto": {
    sections: [
      { heading: "Esgoto voltando em mais de um ponto?", text: "Se o ralo, o vaso ou a caixa de inspeção apresentam retorno ao mesmo tempo, suspenda o uso da água nos pontos afetados e evite contato com o esgoto. Conte em qual ponto o retorno apareceu primeiro e se outros imóveis também foram afetados." },
      { heading: "Acesso à caixa de inspeção", text: "Diga se a caixa fica no quintal, na garagem ou em área comum. A equipe usa essa informação para planejar o acesso e avaliar até onde vai a obstrução. Em condomínio, avise o responsável se o retorno atingir mais de uma unidade." }
    ],
    faq: [
      { q: "O que fazer se houver retorno de esgoto em apartamentos diferentes?", a: "Avise a administração do prédio e informe à equipe quais unidades foram afetadas. Esse padrão ajuda a orientar a avaliação do trecho compartilhado." },
      { q: "Se o esgoto está voltando, posso continuar usando a pia?", a: "Evite usar os pontos que possam alimentar o trecho afetado até a avaliação. Se houver água contaminada no piso, mantenha pessoas e animais afastados." }
    ]
  },
  "desentupimento-de-caixa-de-gordura": {
    sections: [
      { heading: "A caixa transbordou ou a pia ficou lenta?", text: "Se a pia da cozinha perdeu vazão e apareceu cheiro perto da caixa, informe os dois sinais. A equipe avalia se há acúmulo na caixa, dificuldade na passagem de saída ou obstrução num trecho antes dela." },
      { heading: "Onde fica a caixa e quem tem acesso?", text: "Avise se a caixa está no quintal, sob o piso, na garagem ou em área comum. Em cozinha comercial, diga quando o local pode ser acessado e se o problema interrompeu a operação." }
    ],
    faq: [
      { q: "A pia lenta significa que a caixa de gordura entupiu?", a: "Pode ser a caixa, mas o bloqueio também pode estar no sifão ou no ramal da pia. O técnico precisa verificar o trajeto antes de indicar o serviço." },
      { q: "Posso jogar água fervente na caixa de gordura?", a: "Evite. Isso pode deslocar a gordura para outro trecho e, dependendo da tubulação, causar danos. Se houver retorno, reduza o uso da pia até a avaliação." }
    ]
  },
  "desentupimento-residencial": {
    sections: [
      { heading: "O entupimento ficou em um cômodo só?", text: "Informe se o problema começou na pia da cozinha, no vaso ou no ralo do banheiro. Quando dois cômodos apresentam retorno ao mesmo tempo, vale avisar onde você percebeu primeiro e o que estava em uso naquele momento." },
      { heading: "Como preparar a visita em casa ou apartamento", text: "Deixe o caminho até o ponto entupido livre, se for seguro. Em apartamento, confirme o acesso pela portaria. Se vizinhos também tiveram retorno, informe a administração e conte isso à Brava." }
    ],
    faq: [
      { q: "A Brava atende apartamento?", a: "Sim. Informe bloco e unidade ao combinar o atendimento e avise se o problema também chegou à área comum ou a outros apartamentos." },
      { q: "Preciso fechar o registro geral se a pia entupiu?", a: "Se o problema estiver só no escoamento da pia, pare de usá-la. Em caso de vazamento contínuo de água, informe isso no contato para orientar a avaliação." }
    ]
  },
  "desentupimento-comercial-industrial": {
    sections: [
      { heading: "Qual área do estabelecimento foi afetada?", text: "Diga se o entupimento interrompeu o uso do banheiro, da cozinha, da caixa de gordura ou do escoamento de outra área. Informe quantos pontos pararam e se o local continua aberto ao público." },
      { heading: "Combine o acesso com o responsável pelo local", text: "Informe o horário permitido para entrada, se há doca ou acesso de serviço e quem pode liberar a tubulação ou a caixa de inspeção. Com esses dados, a equipe pode avaliar a visita considerando a rotina do estabelecimento." }
    ],
    faq: [
      { q: "Posso solicitar atendimento fora do horário comercial?", a: "Os canais funcionam 24 horas. Informe seu horário de acesso para a equipe confirmar a disponibilidade e a previsão." },
      { q: "O que informar se o entupimento parou uma cozinha ou área de trabalho?", a: "Diga qual ponto foi afetado, se há retorno de água ou esgoto e quem pode liberar a entrada para a avaliação." }
    ]
  }
} satisfies Record<string, ServiceGuide>;
