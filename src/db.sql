INSERT INTO certificate (
        certificate_id,
        accreditation_code,
        no_credits,
        type_of_credit
    )
VALUES ('FMW_003', 'cfpc_01', '0', 'NA');
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
        'FMW_003',
        'AP_01',
        'Queens/Pfizer',
        'non-accredited',
        'Painting the Patient Journey',
        'Type 2 Diabetes, the Role of Insulin and the Implications of Time - in - Range',
        'This program is aimed at primary care physicians who are managing patients with type 2 diabetes.It will discuss how to optimize glycemic control using basal insulin and discuss when to intensify therapy.',
        '',
        'english',
        '',
        'https://dxlink.ca/programs/Painting-the-Patient-Journey',
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
        'FMW_003_Eval_01',
        'FMW_003',
        'Evaluation',
        'Eval'
    );
INSERT INTO program_sections (
        program_section_id,
        program_id,
        program_section_name,
        program_section_type
    )
VALUES ('FMW_003_Case_01', 'FMW_003', 'Cases1', 'case1');
INSERT INTO program_sections (
        program_section_id,
        program_id,
        program_section_name,
        program_section_type
    )
VALUES ('FMW_003_Case_02', 'FMW_003', 'Cases2', 'case2');
INSERT INTO program_sections (
        program_section_id,
        program_id,
        program_section_name,
        program_section_type
    )
VALUES ('FMW_003_Case_03', 'FMW_003', 'Cases3', 'case3');
INSERT INTO program_sections (
        program_section_id,
        program_id,
        program_section_name,
        program_section_type
    )
VALUES ('FMW_003_Case_04', 'FMW_003', 'Cases4', 'case4');
INSERT INTO questions (question_id, question, type)
VALUES (
        'FMW_003_E_01',
        'Please indicate your profession:',
        'open'
    ),
    (
        'FMW_003_E_02',
        'This program content enhanced my knowledge',
        'open'
    ),
    (
        'FMW_003_E_03',
        'The program was relevant to me',
        'open'
    ),
    (
        'FMW_003_E_04',
        'The program met the stated learning objectives',
        'open'
    ),
    (
        'FMW_003_E_05',
        'Updates discussed in the program will impact my practice',
        'open'
    ),
    (
        'FMW_003_E_06',
        'The format was effective',
        'open'
    ),
    (
        'FMW_003_E_07',
        'This activity was of value to me in my current role',
        'open'
    ),
    (
        'FMW_003_E_08',
        'The program was well-organized',
        'open'
    ),
    (
        'FMW_003_E_09',
        'The program was unbiased',
        'open'
    ),
    (
        'FMW_003_E_010',
        'Dr.Bari Presented the program clearly and effectively',
        'open'
    ),
    (
        'FMW_003_E_011',
        'Dr.Bari Demonstrated good leadership qualities',
        'open'
    ),
    (
        'FMW_003_E_012',
        'Dr.Arnaout Presented the program clearly and effectively',
        'open'
    ),
    (
        'FMW_003_E_013',
        'Dr.Arnaout Demonstrated good leadership qualities',
        'open'
    ),
    (
        'FMW_003_E_014',
        'Dr.Reichert Presented the program clearly and effectively ',
        'open'
    ),
    (
        'FMW_003_E_015',
        'Dr.Reichert Demonstrated good leadership qualities',
        'open'
    ),
    (
        'FMW_003_E_016',
        '1. How likely would you be to recommend this program to a friend or colleague ?(Not all all likely 0, Extremely likely 10)',
        'open'
    ),
    (
        'FMW_003_E_017',
        '2.Describe two positive features of this program:  1.',
        'open'
    ),
    (
        'FMW_003_E_018',
        '2.Describe two positive features of this program:  2.',
        'open'
    ),
    (
        'FMW_003_E_019',
        '3.Would you change anything about the program ?  If so, please explain.',
        'open'
    ),
    (
        'FMW_003_E_020',
        '4.What did you learn from this program that you plan to use in your practice ?',
        'open'
    ),
    (
        'FMW_003_E_021',
        '5.Please list any other related topics that you would like to see covered in future learning programs:',
        'open'
    ),
    (
        'FMW_003_E_022',
        '6.Are there any gaps in care or other challenges that you would like to discuss ?',
        'open'
    ),
    (
        'FMW_003_E_023',
        '7.Did you perceive any degree of bias in any part of the program ? If yes, please describe ',
        'open'
    ),
    (
        'FMW_003_E_024',
        '8.Did the activity respect the CQDPCM Code of Ethics (http: / / cqdpcm.ca)?',
        'open'
    ),
    (
        'FMW_003_E_025',
        '9.General comments and suggestions:',
        'open'
    );
INSERT INTO questions (question_id, question, type)
VALUES (
        'FMW_003_CASE1_01',
        'If Reena was your patient, what would be your course of action ? (Please check all that apply)',
        'open'
    ),
    (
        'FMW_003_CASE1_02',
        'Reena is going to be initiated on basal insulin.Which of the following statements is TRUE ?',
        'open'
    ),
    (
        'FMW_003_CASE1_03',
        'The clinician provides training for patient on basal insulin.Which of the following statements is TRUE ?',
        'open'
    ),
    (
        'FMW_003_CASE1_04',
        'Reena is in to see her clinician 4 months later.She titrated her insulin, but she is still not reaching A1C target.What would be your course of action ? (Please check all that apply)',
        'open'
    );
INSERT INTO questions (question_id, question, type)
VALUES (
        'FMW_003_CASE2_01',
        'If Ruby was your patient, what A1C target would you set ?',
        'open'
    ),
    (
        'FMW_003_CASE2_02',
        'Ruby has a brother and sister with type 2 diabetes and she is the only one using insulin.She wants to know if insulin should be used in seniors.Which of the following statements is TRUE ?',
        'open'
    ),
    (
        'FMW_003_CASE2_03',
        'How would you manage the question regarding the switch to a biosimilar insulin ?',
        'open'
    ),
    (
        'FMW_003_CASE2_04',
        'How would you switch Mary from her current insulin to a 2nd generation basal insulin analogue ? (Please check all that apply)',
        'open'
    );
INSERT INTO questions (question_id, question, type)
VALUES (
        'FMW_003_CASE3_01',
        'If Steve was your patient what would be your course of action ? (Please check all that apply)',
        'open'
    ),
    (
        'FMW_003_CASE3_02',
        'Steve mentions that his current blood glucose meter is old.He wants to know if he would be a candidate for a continuous glucose monitoring (CGM).Would you consider CGM for this patient ?',
        'open'
    ),
    (
        'FMW_003_CASE3_03',
        'Steve wants to know the significance of glycemic variability.Which of the following statements is TRUE ? (please check all that apply)',
        'open'
    ),
    (
        'FMW_003_CASE3_04',
        'Steve reduced his insulin dose and provides this AGP after 2 weeks.What would be your course of action ? (please check all that apply)',
        'open'
    );
INSERT INTO questions (question_id, question, type)
VALUES (
        'FMW_003_CASE4_01',
        'If Lenore was your patient what would be your course of action ? (Please check all that apply)',
        'open'
    ),
    (
        'FMW_003_CASE4_02',
        'Lenore returns 3 months later.She is still above A1C target.What would be your course of action ?',
        'open'
    ),
    (
        'FMW_003_CASE4_03',
        'Lenore is interested in trying the FRC.She is being considered for insulin glargine and lixisenatide fixed ratio combination.What dose would she start on ?',
        'open'
    ),
    (
        'FMW_003_CASE4_04',
        'Lenore calls the office and mentions that she has had some stomach upset since starting the FRC.What is the most appropriate course of action ?',
        'open'
    );