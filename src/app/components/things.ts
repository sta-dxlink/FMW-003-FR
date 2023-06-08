export interface Question {
  id: number;
  name: string;
}
export const Learning_Objectives = [
  {
    txt: 'Déterminer quand instaurer l’insuline basale et comment optimiser cette option thérapeutique dans le diabète de type 2',
  },
  {
    txt: 'Passer en revue les options de traitement lorsqu’on demande à un patient utilisant une insuline basale de passer à un biosimilaire ',
  },
  {
    txt: 'Expliquer le rôle que jouent les mesures du temps passé dans l’intervalle cible pour optimiser le contrôle de la glycémie et leur rôle potentiel dans la réduction du risque à court et à long terme chez les patients atteints de diabète de type 2 sous insuline ',
  },
  {
    txt: 'Déterminer les candidats à l’insuline basale en proportions fixes et le titrage des patients',
  },
];

export const Case1 = [
  {
    num1: 0,
    num2: 0,
    video: '824876175',
    src: './assets/imgs/cas1-rennaQ1.png',
    Question:
      '1. Si Reena était votre patiente, que feriez-vous? (Veuillez cocher toutes les réponses qui s’appliquent.)',
    choices: [
      { choice: 'a) Augmenter la dose de semaglutide à 2,0 mg par semaine ' },
      {
        choice: 'b)  Intensifier le régime alimentaire et l’activité physiqu',
      },
      { choice: 'c)  Ajouter de la sulfonylurée ' },
      { choice: 'd)  Ajouter de la pioglitazone ' },
      { choice: 'e)  Ajouter de l’acarbose' },
      { choice: 'f)  Ajouter de l’insuline basale ' },
      {
        choice:
          'g)  Passer à une association insuline/AR GLP-1 en proportions fixes',
      },
    ],
  },
  {
    num1: 2,
    num2: 1,
    video: '824876278',
    src: './assets/imgs/cas1-rennaQ1.png',
    Question:
      '2. Reena va être mise sous insuline basale. Lequel des énoncés suivants est VRAI?',
    choices: [
      { choice: 'a)	La dose initiale doit être de 5 unités par jour' },
      {
        choice:
          "b) La 2<sup>e</sup> génération d'analogues basaux présente un risque moindre d'hypoglycémie",
      },
      {
        choice:
          'c)	La titration de toutes les insulines basales doit être augmentée quotidiennement ',
      },
      { choice: 'd)	La cible de la glycémie à jeun doit être < 10,0 mmol/L' },
    ],
  },
  {
    num1: 4,
    num2: 2,
    video: '824876607',
    src: './assets/imgs/case1-extended.png',
    Question:
      "3. Le clinicien assure la formation de la patiente à l'insuline basale. Lequel des énoncés suivants est VRAI?",
    choices: [
      {
        choice:
          'a)	Les stylos à insuline doivent être amorcés chaque fois avant le dosage',
      },
      {
        choice:
          "b)	 Elle doit utiliser un tampon imbibé d'alcool sur la cartouche du stylo à insuline et sur le site d'injection ",
      },
      {
        choice:
          "c)	L'aiguille de 8 mm est préférable pour la plupart des patients en surpoids ou obèses  ",
      },
      {
        choice: "d)	Il est important de pincer avant l'injection ",
      },
    ],
  },
  {
    num1: 6,
    num2: 3,
    video: '824876831',
    src: './assets/imgs/cas1-rennaQ4.png',
    Question:
      "4. Reena se rend chez son clinicien quatre mois plus tard. Elle a titré son insuline, mais elle n'atteint toujours pas la cible de HbA1c. Quelle serait votre ligne de conduite? (Veuillez cocher toutes les réponses qui s'appliquent.) ",
    choices: [
      {
        choice: "a) Augmenter la dose d'insuline glargine",
      },
      {
        choice: 'b)	Augmenter la dose de semaglutide ',
      },
      {
        choice: "c)	Réévaluer la technique d'injection ",
      },
      {
        choice: "d)	Ajouter l'insuline prandiale ",
      },
    ],
  },
];

export const Case2 = [
  {
    num1: 0,
    num2: 0,
    video: '824876971',
    src: './assets/imgs/case2-ruby.jpeg',
    Question:
      '1. Si Ruby était votre patiente, quel cible de HbA1c fixeriez-vous?',
    choices: [
      { choice: 'a) ≤ 6.5%' },
      { choice: 'b) ≤ 7.0%' },
      { choice: 'c) ≤ 8.0%' },
      { choice: 'd) ≤ 8.5%' },
    ],
  },
  {
    num1: 2,
    num2: 1,
    video: '824877018',
    src: './assets/imgs/case2-extended.png',
    Question:
      "2. Ruby a un frère et une sœur atteints de diabète de type 2 et elle est la seule à utiliser de l'insuline. Elle veut savoir si l'insuline devrait être utilisée chez les personnes âgées. Lequel des énoncés suivants est VRAI?",
    choices: [
      {
        choice:
          "a) Le risque de l'insuline basale chez les personnes âgées dépasse les bénéfices",
      },
      {
        choice:
          "b)  En général, il est préférable de viser un taux de HbA1c plus élevé plutôt que d'utiliser de l'insuline chez les personnes âgées",
      },
      {
        choice:
          "c) L'insuline est une solution efficace et sûre pour les personnes âgées",
      },
      {
        choice:
          "d) L'insuline est le traitement de 3e intention privilégié chez les personnes âgées atteintes de MRC",
      },
    ],
  },
  {
    num1: 4,
    num2: 2,
    video: '824877095',
    src: './assets/imgs/case2-extended.Q3png.png',
    Question:
      '3. Comment géreriez-vous la question concernant le passage à une insuline biosimilaire?',
    choices: [
      { choice: "a) Passer à l'insuline biosimilaire" },
      {
        choice: 'b) Passer à une insuline basale de 2<sup>e</sup> génération',
      },
      {
        choice:
          'c) Je lui dirais de conserver son insuline actuelle et de payer la différence',
      },
      { choice: "d) Je prescrirais n'importe quelle insuline basale couverte" },
    ],
  },
  {
    num1: 6,
    num2: 3,
    video: '824877168',
    src: './assets/imgs/case2-extended.Q4.png',
    Question:
      "4. Comment faire passer Ruby de son insuline actuelle à une insuline basale analogue de 2<sup>e</sup> génération? (Veuillez cocher toutes les réponses qui s'appliquent.)",
    choices: [
      { choice: "a) Réduire sa dose de 20 % et l'administrer en même temps" },
      { choice: 'b) Passer à la 2<sup>e</sup> génération à la même dose' },
      {
        choice:
          "c) S'assurer qu'elle surveille son taux de glucose quotidiennement",
      },
      {
        choice:
          "d) Fournir une formation sur le nouveau stylo et l'administration",
      },
    ],
  },
];

export const Case3 = [
  {
    num1: 0,
    num2: 0,
    video: '824877325',
    src: './assets/imgs/case3-steve.jpeg',
    Question:
      "1. Si Steve était votre patient, quel serait votre plan d'action? (Veuillez cocher toutes les réponses qui s'appliquent.)",
    choices: [
      { choice: "a) N'apporter aucun changement pour le moment" },
      { choice: "b) Réduire la dose d'insuline glargine" },
      { choice: "c) Dépister l'hypoglycémie" },
      { choice: 'd) Arrêter la linagliptine' },
    ],
  },
  {
    num1: 2,
    num2: 1,
    video: '824877377',
    src: './assets/imgs/case3-extendedQ2.png',
    Question:
      "2. Steve mentionne que son lecteur de glycémie actuel est vieux. Il veut savoir s'il serait un candidat pour une surveillance continue du glucose (SCG). Envisageriez-vous une SCG pour ce patient? ",
    choices: [{ choice: 'a) Oui' }, { choice: 'b) Non' }],
    name: 'name2',
  },
  {
    num1: 4,
    num2: 2,
    video: '824877606',
    src: './assets/imgs/case3-extendedQ3.png',
    Question:
      "3. Steve veut connaître la signification de la variabilité glycémique. Lequel des énoncés suivants est VRAI? (Veuillez cocher toutes les réponses qui s'appliquent.)",
    choices: [
      {
        choice:
          "a) Il s'agit uniquement d'un marqueur du risque d'hypoglycémie",
      },
      {
        choice: "b) C'est rarement un problème chez les patients sous insuline",
      },
      { choice: 'c) La cible est < 20 %' },
      {
        choice:
          "d) Elle est corrélée avec le temps passé dans l'intervalle cible",
      },
    ],
  },
  {
    num1: 6,
    num2: 3,
    video: '824877879',
    src: './assets/imgs/case3-extendedQ4.png',
    Question:
      "4. Steve a réduit sa dose d'insuline et fournit ce PGA après deux semaines. Quelle serait votre ligne de conduite? (Veuillez cocher toutes les réponses qui s'appliquent.)",
    choices: [
      { choice: "a) Réduire la dose d'insuline glargine" },
      {
        choice:
          "b) Passer à un analogue de l'insuline de 2<sup>e</sup> génération",
      },
      { choice: 'c) Encourager davantage de modifications du mode de vie' },
      { choice: 'd) Rien à ce stade' },
    ],
  },
];

export const Case4 = [
  {
    num1: 0,
    num2: 0,
    video: '824878084',
    src: './assets/imgs/case4-lenore.jpeg',
    Question:
      "1. Si Lenore était votre patiente, quelle serait votre ligne de conduite? (Veuillez cocher toutes les réponses qui s'appliquent.)",
    choices: [
      { choice: "a) Augmenter la dose d'insuline glargine" },
      { choice: "b) Remplacer l'inhibiteur DPP-4 par AR GLP-1" },
      { choice: "c) Ajouter l'insuline prandiale" },
      { choice: 'd) Ajouter de la sulfonylurée' },
    ],
  },
  {
    num1: 2,
    num2: 1,
    video: '824878133',
    src: './assets/imgs/case4-extended.png',
    Question:
      '2. Lenore revient trois mois plus tard. Son taux de HbA1c se situe toujours au-dessus du taux cible. Quelle serait votre ligne de conduite?',
    choices: [
      { choice: "a) Augmenter la dose d'insuline glargine " },
      { choice: 'b) Ajouter AR GLP-1 et arrêter la sitagliptine' },
      { choice: "c) Ajouter un sécrétagogue de l'insuline" },
      {
        choice:
          'd) Passer sitagliptine et AR GLP-1/insuline à des proportions fixes',
      },
    ],
  },
  {
    num1: 4,
    num2: 2,
    video: '824878197',
    src: './assets/imgs/case4-Q3.png',
    Question:
      "3. Lenore est intéressée à essayer les proportions fixes Elle pourrait bénéficier d'une association d'insuline glargine et de lixisenatide à proportions fixes. Par quelle dose devrait-elle commencer?",
    choices: [
      { choice: 'a) 15 unités' },
      { choice: 'b) 30 unités' },
      { choice: 'c) 42 unités' },
      { choice: 'd) 60 unités' },
    ],
    name: 'name3',
  },
  {
    num1: 6,
    num2: 3,
    video: '824878317',
    src: './assets/imgs/case4-Q4.png',
    Question:
      "4. Lenore appelle le bureau et mentionne qu'elle a des maux d'estomac depuis qu'elle a commencé les proportions fixes. Quel est le meilleur plan d'action?",
    choices: [
      { choice: 'a) Abandonner les proportions fixes' },
      { choice: 'b) Diminuer la dose à 15 unités tous les matins' },
      { choice: "c) Déplacer la dose à l'heure du souper" },
      {
        choice:
          "d) L'encourager à manger lentement, à éviter les aliments frits ou épicés et à manger de plus petites portions",
      },
    ],
  },
];

export const mEvalo = [
  {
    number: 'q1',
    Q: 'Veuillez indiquer votre profession:',
    sa: 'Médecin de famille ',
    a: 'Médecin généraliste  ',
    n: 'Infirmier',
    d: 'Autre',
  },
  {
    number: 'q2',
    Q: 'Le contenu de ce programme a amélioré mes connaissances',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
    title:
      "<br /> Veuillez indiquer dans quelle mesure vous êtes d'accord avec les énoncés ci-dessous, en utilisant l'échelle suivante: <br />" +
      "1 Tout à fait d'accord; 2 D'accord; 3 Neutre; 4 Pas d'accord; 5 Pas du tout d'accord<br /><br />" +
      'Le programme',
  },
  {
    number: 'q3',
    Q: 'Le programme était pertinent pour moi',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
  },
  {
    number: 'q4',
    Q: "Le programme a permis d'atteindre les objectifs d'apprentissage énoncés",
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
  },
  {
    number: 'q5',
    Q: 'Les mises à jour présentées dans le programme auront une incidence sur ma pratique',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
  },
  {
    number: 'q6',
    Q: 'Le format était efficace',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
  },
  {
    number: 'q7',
    Q: "Cette activité m'a été utile dans mes fonctions actuelles",
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
  },
  {
    number: 'q8',
    Q: 'Le programme était bien structuré',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
  },
  {
    number: 'q9',
    Q: 'Le programme était impartial',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
  },
  {
    number: 'q10',
    Q: 'A présenté le programme de façon claire et efficace',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
    title: '<br /> <u>Les conférenciers </u> <br /> Dr. Bari',
  },
  {
    number: 'q11',
    Q: 'A démontré de bonnes qualités de leadership',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
  },
  {
    number: 'q12',
    Q: ' A présenté le programme de façon claire et efficace ',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
    title: '<br />Dre. Arnaout ',
  },
  {
    number: 'q13',
    Q: 'A démontré de bonnes qualités de leadership',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
  },
  {
    number: 'q14',
    Q: ' A présenté le programme de façon claire et efficace ',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
    title: '<br />Dre. Reichert',
  },
  {
    number: 'q15',
    Q: 'A démontré de bonnes qualités de leadership',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
  },
  {
    number: 'q16',
    Q: '1.	Dans quelle mesure est-il probable que vous présentiez ce programme à un collègue ou un ami?( Pas du tout probable 0, Extrêmement probable 10)',
    sa: '0',
    a: '1',
    n: '2',
    d: '3',
    sd: '4',
    five: '5',
    six: '6',
    seven: '7',
    height: '8',
    nine: '9',
    ten: '10',
    title: 'Veuillez répondre aux questions suivantes:',
  },
];

