// Typing logic utilities for calculating WPM, accuracy, and mistake tracking

export const calculateWPM = (characters, timeInSeconds) => {
  if (timeInSeconds === 0) return 0;
  const words = characters / 5; // Standard: 1 word = 5 characters
  const minutes = timeInSeconds / 60;
  return Math.round(words / minutes);
};

export const calculateAccuracy = (correctChars, totalChars) => {
  if (totalChars === 0) return 100;
  return Math.round((correctChars / totalChars) * 100);
};

export const calculateMistakes = (userInput, targetText) => {
  let mistakes = 0;
  const maxLength = Math.max(userInput.length, targetText.length);
  
  for (let i = 0; i < maxLength; i++) {
    if ((userInput[i] || '') !== (targetText[i] || '')) {
      mistakes++;
    }
  }
  
  return mistakes;
};

export const getFingerForKey = (key) => {
  const fingerMap = {
    // Home row
    a: { finger: 'Left Pinky', position: 'left' },
    s: { finger: 'Left Ring', position: 'left' },
    d: { finger: 'Left Middle', position: 'left' },
    f: { finger: 'Left Index', position: 'left' },
    j: { finger: 'Right Index', position: 'right' },
    k: { finger: 'Right Middle', position: 'right' },
    l: { finger: 'Right Ring', position: 'right' },
    ';': { finger: 'Right Pinky', position: 'right' },
    // Top row
    q: { finger: 'Left Pinky', position: 'left' },
    w: { finger: 'Left Ring', position: 'left' },
    e: { finger: 'Left Middle', position: 'left' },
    r: { finger: 'Left Index', position: 'left' },
    t: { finger: 'Left Index', position: 'left' },
    y: { finger: 'Right Index', position: 'right' },
    u: { finger: 'Right Index', position: 'right' },
    i: { finger: 'Right Middle', position: 'right' },
    o: { finger: 'Right Ring', position: 'right' },
    p: { finger: 'Right Pinky', position: 'right' },
    // Bottom row
    z: { finger: 'Left Pinky', position: 'left' },
    x: { finger: 'Left Ring', position: 'left' },
    c: { finger: 'Left Middle', position: 'left' },
    v: { finger: 'Left Index', position: 'left' },
    b: { finger: 'Left Index', position: 'left' },
    n: { finger: 'Right Index', position: 'right' },
    m: { finger: 'Right Index', position: 'right' },
    ',': { finger: 'Right Middle', position: 'right' },
    '.': { finger: 'Right Ring', position: 'right' },
    '/': { finger: 'Right Pinky', position: 'right' },
  };
  return fingerMap[key.toLowerCase()] || { finger: 'Unknown', position: 'center' };
};

export const generateHomeRowExercises = () => {
  return [
    { text: 'f f f f f', description: 'Practice F key with left index' },
    { text: 'j j j j j', description: 'Practice J key with right index' },
    { text: 'f j f j f j', description: 'Alternate between F and J' },
    { text: 'd k d k d k', description: 'Practice D and K' },
    { text: 's l s l s l', description: 'Practice S and L' },
    { text: 'a ; a ; a ;', description: 'Practice A and Semicolon' },
    { text: 'a s d f j k l ;', description: 'Complete home row' },
    { text: 'dad sad fad jab sad lad', description: 'Home row words' },
  ];
};

export const assignUserLevel = (assessment) => {
  const { wpm = 0, accuracy = 0, questionnaire = {} } = assessment;

  // Validate inputs
  const validWPM = Math.max(0, Math.min(200, wpm));
  const validAccuracy = Math.max(0, Math.min(100, accuracy));

  // Weighted scoring system (out of 100)
  let score = 0;
  const weights = {
    experience: 15,
    touchTyping: 20,
    typeWithoutLooking: 25,
    accuracy: 20,
    speed: 20,
  };

  // 1. Typing Experience Score (0-15 points)
  let experienceScore = 0;
  switch (questionnaire.typingExperience) {
    case 'never':
      experienceScore = 0;
      break;
    case 'little':
      experienceScore = 7;
      break;
    case 'regularly':
      experienceScore = 15;
      break;
    default:
      experienceScore = 0;
  }
  score += experienceScore;

  // 2. Touch Typing Knowledge Score (0-20 points)
  let touchTypingScore = 0;
  switch (questionnaire.touchTypingKnowledge) {
    case 'no':
      touchTypingScore = 0;
      break;
    case 'little':
      touchTypingScore = 10;
      break;
    case 'yes':
      touchTypingScore = 20;
      break;
    default:
      touchTypingScore = 0;
  }
  score += touchTypingScore;

  // 3. Type Without Looking Score (0-25 points) - Most Important
  let typeWithoutLookingScore = 0;
  switch (questionnaire.canTypeWithoutLooking) {
    case 'no':
      typeWithoutLookingScore = 0;
      break;
    case 'sometimes':
      typeWithoutLookingScore = 12;
      break;
    case 'yes':
      typeWithoutLookingScore = 25;
      break;
    default:
      typeWithoutLookingScore = 0;
  }
  score += typeWithoutLookingScore;

  // 4. Accuracy Score (0-20 points)
  let accuracyScore = 0;
  if (validAccuracy < 70) {
    accuracyScore = 0;
  } else if (validAccuracy < 85) {
    accuracyScore = 8;
  } else if (validAccuracy < 95) {
    accuracyScore = 14;
  } else {
    accuracyScore = 20;
  }
  score += accuracyScore;

  // 5. Speed Score (0-20 points)
  let speedScore = 0;
  if (validWPM < 20) {
    speedScore = 0;
  } else if (validWPM < 40) {
    speedScore = 6;
  } else if (validWPM < 60) {
    speedScore = 12;
  } else if (validWPM < 80) {
    speedScore = 18;
  } else {
    speedScore = 20;
  }
  score += speedScore;

  // Determine level based on weighted score
  let level = 'BEGINNER';
  let recommendedPath = 'HOME_ROW';

  if (score >= 70 && typeWithoutLookingScore >= 20 && touchTypingScore >= 15 && validAccuracy >= 95) {
    level = 'ADVANCED';
    recommendedPath = 'SPEED_AND_ACCURACY';
  } else if (score >= 45 && typeWithoutLookingScore >= 12 && validAccuracy >= 85) {
    level = 'INTERMEDIATE';
    recommendedPath = 'SKILL_IMPROVEMENT';
  } else {
    level = 'BEGINNER';
    recommendedPath = 'HOME_ROW';
  }

  // Build strengths and improvements
  const strengths = [];
  const improvements = [];

  // Analyze strengths
  if (validAccuracy >= 95) {
    strengths.push('Excellent Accuracy');
  }
  if (validWPM >= 60) {
    strengths.push('Strong Speed');
  }
  if (typeWithoutLookingScore >= 20) {
    strengths.push('Touch Typing Skills');
  }
  if (experienceScore >= 10) {
    strengths.push('Typing Experience');
  }

  // Analyze improvements
  if (validAccuracy < 90) {
    improvements.push('Improve Accuracy');
  }
  if (validWPM < 50) {
    improvements.push('Increase Speed');
  }
  if (typeWithoutLookingScore < 15) {
    improvements.push('Learn Touch Typing Technique');
  }
  if (touchTypingScore < 15) {
    improvements.push('Master Finger Placement');
  }

  return {
    level,
    score: Math.round(score),
    strengths: strengths.length > 0 ? strengths : ['Good Start!'],
    improvements: improvements.length > 0 ? improvements : ['Continue Practicing'],
    recommendedPath,
    details: {
      wpm: validWPM,
      accuracy: validAccuracy,
      experienceScore,
      touchTypingScore,
      typeWithoutLookingScore,
      accuracyScore,
      speedScore,
    },
  };
};

export const generateAssessmentText = () => {
  const homeRow = 'a s d f j k l ; a s d f j k l ;';
  const repeated = homeRow.split('').join(' ');
  return repeated;
};
