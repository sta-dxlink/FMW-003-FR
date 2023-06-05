INSERT INTO certificate (
        certificate_id,
        accreditation_code,
        no_credits,
        type_of_credit
    )
VALUES ('FMW_003_FR', 'cfpc_01', '2', 'NA');
/*create program details: */
INSERT INTO programs (
        program_id,
        area_id,
        sponsor,
        program_type,
        program_title,
        program_subtitle,
        program_description,
        image,
        language,
        authors,
        url,
        launch_date,
        expiration_date
    )
VALUES (
        'FMW_003_FR',
        'AP_01',
        'Queens/Pfizer',
        'accredited',
        'Peindre le parcours du patient',
        "Le diabète de type 2, le rôle de l'insuline et les implications de l'intervalle de temps",
        "Ce programme est destiné aux médecins de soins primaires qui traitent des patients atteints de diabète de type 2.Il y sera question de la manière d ’ optimiser le contrôle glycémique à l ’ aide de l ’ insuline basale et du moment où il convient d ’ intensifier le traitement.",
        '',
        'french',
        '',
        'https://dxlink.ca/programs/Peindre-le-parcours-du-patient',
        '',
        ''
    );
/* The next section is the Evaluation Section Section */
/* Create the Evaluation section with approriate id */
INSERT INTO program_sections (
        program_section_id,
        program_id,
        program_section_name,
        program_section_type
    )
VALUES (
        'FMW_003_FR_Eval_01',
        'FMW_003_FR',
        'Evaluation',
        'Eval'
    );
INSERT INTO program_sections (
        program_section_id,
        program_id,
        program_section_name,
        program_section_type
    )
VALUES (
        'FMW_003_FR_Case_01',
        'FMW_003_FR',
        'Cases1',
        'case1'
    );
INSERT INTO program_sections (
        program_section_id,
        program_id,
        program_section_name,
        program_section_type
    )
VALUES (
        'FMW_003_FR_Case_02',
        'FMW_003_FR',
        'Cases2',
        'case2'
    );
INSERT INTO program_sections (
        program_section_id,
        program_id,
        program_section_name,
        program_section_type
    )
VALUES (
        'FMW_003_FR_Case_03',
        'FMW_003_FR',
        'Cases3',
        'case3'
    );
INSERT INTO program_sections (
        program_section_id,
        program_id,
        program_section_name,
        program_section_type
    )
VALUES (
        'FMW_003_FR_Case_04',
        'FMW_003_FR',
        'Cases4',
        'case4'
    );
INSERT INTO questions (question_id, question, type)
VALUES (
        'FMW_003_FR_E_01',
        'Veuillez indiquer votre profession:',
        'open'
    ),
    (
        'FMW_003_FR_E_02',
        'Le contenu de ce programme a amélioré mes connaissances',
        'open'
    ),
    (
        'FMW_003_FR_E_03',
        'Le programme était pertinent pour moi',
        'open'
    ),
    (
        'FMW_003_FR_E_04',
        "Le programme a permis d'atteindre les objectifs d'apprentissage énoncés",
        'open'
    ),
    (
        'FMW_003_FR_E_05',
        'Les mises à jour présentées dans le programme auront une incidence sur ma pratique',
        'open'
    ),
    (
        'FMW_003_FR_E_06',
        'Le format était efficace',
        'open'
    ),
    (
        'FMW_003_FR_E_07',
        "Cette activité m'a été utile dans mes fonctions actuelles",
        'open'
    ),
    (
        'FMW_003_FR_E_08',
        'TLe programme était bien structuré',
        'open'
    ),
    (
        'FMW_003_FR_E_09',
        'Le programme était impartial',
        'open'
    ),
    (
        'FMW_003_FR_E_010',
        'Dr.Bari A présenté le programme de façon claire et efficace',
        'open'
    ),
    (
        'FMW_003_FR_E_011',
        'Dr.Bari A démontré de bonnes qualités de leaderships',
        'open'
    ),
    (
        'FMW_003_FR_E_012',
        'Dre.Arnaout A présenté le programme de façon claire et efficace',
        'open'
    ),
    (
        'FMW_003_FR_E_013',
        'Dre.Arnaout A démontré de bonnes qualités de leaderships',
        'open'
    ),
    (
        'FMW_003_FR_E_014',
        'Dre.Reichert A présenté le programme de façon claire et efficace ',
        'open'
    ),
    (
        'FMW_003_FR_E_015',
        'Dre.Reichert A démontré de bonnes qualités de leaderships',
        'open'
    ),
    (
        'FMW_003_FR_E_016',
        '1. Dans quelle mesure est - il probable que vous présentiez ce programme à un collègue ou un ami ?(Pas du tout probable 0, Extrêmement probable 10)',
        'open'
    ),
    (
        'FMW_003_FR_E_017',
        '2.Décrivez deux caractéristiques positives de ce programme:  1.',
        'open'
    ),
    (
        'FMW_003_FR_E_018',
        '2.Décrivez deux caractéristiques positives de ce programme:  2.',
        'open'
    ),
    (
        'FMW_003_FR_E_019',
        '3.Changeriez-vous quelque chose au programme? Le cas échéant, veuillez expliuer en quoi.',
        'open'
    ),
    (
        'FMW_003_FR_E_020',
        '4.Qu’avez-vous appris dans ce programme que vous comptez utiliser dans votre pratique?',
        'open'
    ),
    (
        'FMW_003_FR_E_021',
        '5.Veuillez indiquer tout autre sujet connexe que vous aimeriez voir abordé dans de nouveaux programmes éducatifs:',
        'open'
    ),
    (
        'FMW_003_FR_E_022',
        '6.Y a - t - il des lacunes dans les soins ou d ’ autres défis que vous aimeriez voir abordés ?',
        'open'
    ),
    (
        'FMW_003_FR_E_023',
        '7.Avez - vous perçu un quelconque degré de partialité dans l ’ une ou l ’ autre partie du programme ? Si oui, veuillez décrire en quoi.',
        'open'
    ),
    (
        'FMW_003_FR_E_024',
        '8.L ’ activité a - t - elle respecté le code d ’ éthique du CQDPCM(http: / / cqdpcm.ca)?',
        'open'
    ),
    (
        'FMW_003_FR_E_025',
        '9.Observations et suggestions générales:',
        'open'
    );
INSERT INTO questions (question_id, question, type)
VALUES (
        'FMW_003_FR_CASE1_01',
        'Si Reena était votre patiente, que feriez-vous? (Veuillez cocher toutes les réponses qui s’appliquent.)',
        'open'
    ),
    (
        'FMW_003_FR_CASE1_02',
        'Reena va être mise sous insuline basale. Lequel des énoncés suivants est VRAI?',
        'open'
    ),
    (
        'FMW_003_FR_CASE1_03',
        "Le clinicien assure la formation de la patiente à l'insuline basale. Lequel des énoncés suivants est VRAI?",
        'open'
    ),
    (
        'FMW_003_FR_CASE1_04',
        "Reena se rend chez son clinicien quatre mois plus tard. Elle a titré son insuline, mais elle n'atteint toujours pas la cible de HbA1c. Quelle serait votre ligne de conduite? (Veuillez cocher toutes les réponses qui s'appliquent.) ",
        'open'
    );
INSERT INTO questions (question_id, question, type)
VALUES (
        'FMW_003_FR_CASE2_01',
        'Si Ruby était votre patiente, quel cible de HbA1c fixeriez-vous?',
        'open'
    ),
    (
        'FMW_003_FR_CASE2_02',
        "Ruby a un frère et une sœur atteints de diabète de type 2 et elle est la seule à utiliser de l'insuline. Elle veut savoir si l'insuline devrait être utilisée chez les personnes âgées. Lequel des énoncés suivants est VRAI?",
        'open'
    ),
    (
        'FMW_003_FR_CASE2_03',
        'Comment géreriez-vous la question concernant le passage à une insuline biosimilaire?',
        'open'
    ),
    (
        'FMW_003_FR_CASE2_04',
        "Comment faire passer Ruby de son insuline actuelle à une insuline basale analogue de 2<sup>e</sup> génération? (Veuillez cocher toutes les réponses qui s'appliquent.)",
        'open'
    );
INSERT INTO questions (question_id, question, type)
VALUES (
        'FMW_003_FR_CASE3_01',
        "Si Steve était votre patient, quel serait votre plan d'action? (Veuillez cocher toutes les réponses qui s'appliquent.)",
        'open'
    ),
    (
        'FMW_003_FR_CASE3_02',
        "Steve mentionne que son lecteur de glycémie actuel est vieux. Il veut savoir s'il serait un candidat pour une surveillance continue du glucose (SCG). Envisageriez-vous une SCG pour ce patient? ",
        'open'
    ),
    (
        'FMW_003_FR_CASE3_03',
        "Steve veut connaître la signification de la variabilité glycémique. Lequel des énoncés suivants est VRAI? (Veuillez cocher toutes les réponses qui s'appliquent.)",
        'open'
    ),
    (
        'FMW_003_FR_CASE3_04',
        "Steve a réduit sa dose d'insuline et fournit ce PGA après deux semaines. Quelle serait votre ligne de conduite? (Veuillez cocher toutes les réponses qui s'appliquent.)",
        'open'
    );
INSERT INTO questions (question_id, question, type)
VALUES (
        'FMW_003_FR_CASE4_01',
        "Si Lenore était votre patiente, quelle serait votre ligne de conduite? (Veuillez cocher toutes les réponses qui s'appliquent.)",
        'open'
    ),
    (
        'FMW_003_FR_CASE4_02',
        'Lenore revient trois mois plus tard. Son taux de HbA1c se situe toujours au-dessus du taux cible. Quelle serait votre ligne de conduite?',
        'open'
    ),
    (
        'FMW_003_FR_CASE4_03',
        "Lenore est intéressée à essayer les proportions fixes Elle pourrait bénéficier d'une association d'insuline glargine et de lixisenatide à proportions fixes. Par quelle dose devrait-elle commencer?",
        'open'
    ),
    (
        'FMW_003_FR_CASE4_04',
        "Lenore appelle le bureau et mentionne qu'elle a des maux d'estomac depuis qu'elle a commencé les proportions fixes. Quel est le meilleur plan d'action?",
        'open'
    );