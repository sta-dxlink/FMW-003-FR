export interface Question {
  id: number;
  name: string;
}
export const Learning_Objectives = [
  {
    txt: 'Determine the time when to initiate basal insulin and how to optimize this treatment option in type 2 diabetes',
  },
  {
    txt: 'Recognize the different basal insulin options, including biosimilars, and understand when to intensify therapy',
  },
  {
    txt: 'Explain the role of time-in-range measurements to optimize glycemic control and potential role in reducing short and long-term risk in patients with type 2 diabetes using insulin',
  },
  {
    txt: 'Determine candidates and titration of patients on fixed-ratio combination (FRC) basal insulin',
  },
];

export const Case1 = [
  {
    num1: 0,
    num2: 0,
    video: '816217653',
    src: './assets/imgs/case1-reena.jpeg',
    Question:
      '1. If Reena was your patient, what would be your course of action? (Please check all that apply)',
    choices: [
      { choice: 'a)  Increase dose of semaglutide to 2.0 mg weekly' },
      { choice: 'b)  Intensify diet and physical activity' },
      { choice: 'c)  Add sulfonylurea' },
      { choice: 'd)  Add pioglitazone' },
      { choice: 'e)  Add acarbose' },
      { choice: 'f)  Add basal insulin' },
      {
        choice:
          'g)  Change semaglutide to fixed-ratio combination (GLP-1 RA/insulin)',
      },
    ],
  },
  {
    num1: 2,
    num2: 1,
    video: '816237677',
    src: './assets/imgs/case1-extended.png',
    Question:
      '2. Reena is going to be initiated on basal insulin. Which of the following statements is TRUE? ',
    choices: [
      { choice: 'a)	The starting dose should be 5 units daily ' },
      {
        choice:
          'b)	2<sup>nd</sup> generation basal analogues have a lower risk of hypoglycemia',
      },
      {
        choice:
          'c)	The titration for all basal insulins should be increased daily ',
      },
      { choice: 'd)	Target fasting blood glucose should be < 10.0 mmol/L ' },
    ],
  },
  {
    num1: 4,
    num2: 2,
    video: '816237927',
    src: './assets/imgs/case1-extended.png',
    Question:
      '3. The clinician provides training for patient on basal insulin. Which of the following statements is TRUE? ',
    choices: [
      {
        choice:
          'a)	Insulin pen devices should be primed every time before dosing',
      },
      {
        choice:
          'b)	She must use an alcohol swab on the insulin pen cartridge and on the injection site ',
      },
      {
        choice:
          'c)	8 mm pen is preferred for most patients with overweight or obesity ',
      },
      {
        choice: 'd)	It is important that she pinch prior to injection ',
      },
    ],
  },
  {
    num1: 6,
    num2: 3,
    video: '816238158',
    src: './assets/imgs/case1-extended.png',
    Question:
      '4. Reena is in to see her clinician 4 months later. She titrated her insulin, but she is still not reaching A1C target. What would be your course of action? (Please check all that apply)',
    choices: [
      {
        choice: 'a)	Increase insulin glargine dose',
      },
      {
        choice: 'b)	Increase semaglutide dose',
      },
      {
        choice: 'c)	Reassess injection technique ',
      },
      {
        choice: 'd)	Add prandial insulin ',
      },
    ],
  },
];

export const Case2 = [
  {
    num1: 0,
    num2: 0,
    video: '816289160',
    src: './assets/imgs/case2-ruby.jpeg',
    Question: '1. If Ruby was your patient, what A1C target would you set?',
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
    video: '816289191',
    src: './assets/imgs/case2-extended.png',
    Question:
      '2. Ruby has a brother and sister with type 2 diabetes and she is the only one using insulin. She wants to know if insulin should be used in seniors. Which of the following statements is TRUE?',
    choices: [
      {
        choice:
          'a) The risk of basal insulin in older adults exceeds the benefits',
      },
      {
        choice:
          'b) Generally, a higher A1C target is preferred over using insulin in older adults',
      },
      { choice: 'c) Insulin is an effective and safe option in older adults' },
      {
        choice:
          'd) Insulin is the preferred 2<sup>nd</sup> line agent in older adults with CKD',
      },
    ],
  },
  {
    num1: 4,
    num2: 2,
    video: '816289257',
    src: './assets/imgs/case2-extended.png',
    Question:
      '3. How would you manage the question regarding the switch to a biosimilar insulin?',
    choices: [
      { choice: 'a) Switch to the biosimilar insulin' },
      { choice: 'b) Switch to a 2<sup>nd</sup> generation basal insulin' },
      {
        choice:
          'c) I would tell her to stay on her current insulin and pay the difference',
      },
      { choice: 'd) I would prescribe whatever basal insulin is covered' },
    ],
  },
  {
    num1: 6,
    num2: 3,
    video: '816289319',
    src: './assets/imgs/case2-extended.png',
    Question:
      '4. How would you switch Ruby from her current insulin to a 2<sup>nd</sup> generation basal insulin analogue? (Please check all that apply)',
    choices: [
      { choice: 'a) Reduce her dose by 20% and administer at the same time' },
      { choice: 'b) Switch to 2<sup>nd</sup> generation at the same dose' },
      { choice: 'c) Ensure she is monitoring her glucose daily' },
      { choice: 'd) Provide training on the new pen and administration' },
    ],
  },
];

export const Case3 = [
  {
    num1: 0,
    num2: 0,
    video: '816289426',
    src: './assets/imgs/case3-steve.jpeg',
    Question:
      '1. If Steve was your patient what would be your course of action? (Please check all that apply)',
    choices: [
      { choice: 'a) No changes at this time' },
      { choice: 'b) Reduce dose of insulin glargine' },
      { choice: 'c) Screen for hypoglycemia' },
      { choice: 'd) Discontinue linagliptin' },
    ],
  },
  {
    num1: 2,
    num2: 1,
    video: '816289451',
    src: './assets/imgs/case3-extendedQ2.png',
    Question:
      '2. Steve mentions that his current blood glucose meter is old. He wants to know if he would be a candidate for continuous glucose monitoring (CGM). Would you consider CGM for this patient?',
    choices: [{ choice: 'a) Yes', }, { choice: 'b) No' }],
    name: 'name2',
  },
  {
    num1: 4,
    num2: 2,
    video: '816513388',
    src: './assets/imgs/case3-extendedQ3.png',
    Question:
      '3. Steve wants to know the significance of glycemic variability. Which of the following statements is TRUE? (please check all that apply)',
    choices: [
      { choice: 'a) It is only a marker for hypoglycemia risk' },
      { choice: 'b) It is rarely an issue in patients taking insulin' },
      { choice: 'c) The target is < 20%' },
      { choice: 'd) It is correlated with time-in-range' },
    ],
  },
  {
    num1: 6,
    num2: 3,
    video: '816289602',
    src: './assets/imgs/case3-extended.png',
    Question:
      '4. Steve reduced his insulin dose and provides this AGP after 2 weeks. What would be your course of action? (please check all that apply)',
    choices: [
      { choice: 'a) Reduce insulin glargine dose' },
      { choice: 'b) Change to 2<sup>nd</sup> generation insulin analogue' },
      { choice: 'c) Encourage more lifestyle modifications' },
      { choice: 'd) Nothing at this point' },
    ],
  },
];

export const Case4 = [
  {
    num1: 0,
    num2: 0,
    video: '817699663',
    src: './assets/imgs/case4-lenore.jpeg',
    Question:
      '1. If Lenore was your patient, what would be your course of action? (Please check all that apply)',
    choices: [
      { choice: 'a) Increase insulin glargine dose' },
      { choice: 'b) Change DPP4i to GLP-1 RA' },
      { choice: 'c) Add prandial insulin' },
      { choice: 'd) Add sulfonylurea' },
    ],
  },
  {
    num1: 2,
    num2: 1,
    video: '817699720',
    src: './assets/imgs/case4-extended.png',
    Question:
      '2. Lenore returns 3 months later. She is still above A1C target. What would be your course of action?',
    choices: [
      { choice: 'a) Increase insulin glargine dose' },
      { choice: 'b) Add GLP-1 RA and discontinue sitagliptin' },
      { choice: 'c) Add insulin secretagogue' },
      {
        choice:
          'd) Change sitagliptin and GLP-1 RA/insulin to fixed ratio combination',
      },
    ],
  },
  {
    num1: 4,
    num2: 2,
    video: '817699797',
    src: './assets/imgs/case4-Q3.png',
    Question:
      '3. Lenore is interested in trying the FRC. She is being considered for insulin glargine and lixisenatide fixed ratio combination. What dose would she start on?',
    choices: [
      { choice: 'a) 15 units' },
      { choice: 'b) 30 units' },
      { choice: 'c) 42 units' },
      { choice: 'd) 60 units' },
    ],
    name: 'name3',
  },
  {
    num1: 6,
    num2: 3,
    video: '817699933',
    src: './assets/imgs/case4-Q4.png',
    Question:
      '4. Lenore calls the office and mentions that she has had some stomach upset since starting the FRC. What is the most appropriate course of action?',
    choices: [
      { choice: 'a) Discontinue the FRC' },
      { choice: 'b) Lower the dose to 15 units QAM' },
      { choice: 'c) Move the dose to supper time' },
      {
        choice:
          'd) Encourage her to eat slow, avoid fried or spicy foods and eat smaller portions',
      },
    ],
  },
];

export const mEvalo = [
  {
    number: 'q1',
    Q: 'Please indicate your profession:',
    sa: 'Family Physician ',
    a: 'General Practitioner ',
    n: 'Nurse',
    d: 'Other',
  },
  {
    number: 'q2',
    Q: 'This program content enhanced my knowledge',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
    title:
      '<br /> Please indicate the degree to which you agree with the statements below, using the following scale: <br />' +
      '1 Strongly agree; 2 Agree; 3 Neutral; 4 Disagree; 5 Strongly disagree<br /><br />' +
      'The Program ',
  },
  {
    number: 'q3',
    Q: 'The program was relevant to me',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
  },
  {
    number: 'q4',
    Q: 'The program met the stated learning objectives',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
  },
  {
    number: 'q5',
    Q: 'Updates discussed in the program will impact my practice',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
  },
  {
    number: 'q6',
    Q: 'The format was effective',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
  },
  {
    number: 'q7',
    Q: 'This activity was of value to me in my current role',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
  },
  {
    number: 'q8',
    Q: 'The program was well-organized',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
  },
  {
    number: 'q9',
    Q: 'The program was unbiased',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
  },
  {
    number: 'q10',
    Q: 'Presented the program clearly and effectively ',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
    title: '<br /> <u>The Speakers</u> <br /> Dr. Bari',
  },
  {
    number: 'q11',
    Q: 'Demonstrated good leadership qualities',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
  },
  {
    number: 'q12',
    Q: ' Presented the program clearly and effectively ',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
    title: '<br />Dr. Arnaout ',
  },
  {
    number: 'q13',
    Q: 'Demonstrated good leadership qualities',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
  },
  {
    number: 'q14',
    Q: ' Presented the program clearly and effectively ',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
    title: '<br />Dr. Reichert',
  },
  {
    number: 'q15',
    Q: 'Demonstrated good leadership qualities',
    sa: '1',
    a: '2',
    n: '3',
    d: '4',
    sd: '5',
  },
  {
    number: 'q16',
    Q: '1.	How likely would you be to recommend this program to a friend or colleague?( Not all all likely 0, Extremely likely 10)',
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
    title: 'Please answer the following questions:',
  },
];

export const Evallq = [

  {
    number: 'q16',
    Q: '2.	Describe two positive features of this program:',
  },
  {
    number: 'q17',
    Q: '3.	Would you change anything about the program? If so, please explain. ',
  },
  {
    number: 'q18',
    Q: '4.	What did you learn from this program that you plan to use in your practice?',
  },

  {
    number: 'q19',
    Q: '5.	Please list any other related topics that you would like to see covered in future learning programs:',
  },
  {
    number: 'q20',
    Q: '6.	Are there any gaps in care or other challenges that you would like to discuss?',
  },

  {
    number: 'q21',
    Q: '7.	Did you perceive any degree of bias in any part of the program? If yes, please describe',
  },

  {
    number: 'q22',
    Q: '8.	Did the activity respect the CQDPCM Code of Ethics (http://cqdpcm.ca)?  Yes  No',
  },

  {
    number: 'q23',
    Q: '9.	General comments and suggestions:',
  },
];