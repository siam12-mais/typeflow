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
  for (let i = 0; i < Math.max(userInput.length, targetText.length); i++) {
    if (userInput[i] !== targetText[i]) {
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
  const { wpm, accuracy, questionnaire } = assessment;

  // Base scoring
  let score = 0;

  // WPM scoring
  if (wpm < 30) score += 1;
  else if (wpm < 50) score += 2;
  else if (wpm < 70) score += 3;
  else score += 4;

  // Accuracy scoring
  if (accuracy < 85) score += 1;
  else if (accuracy < 95) score += 2;
  else score += 3;

  // Questionnaire factors
  const hasTypedBefore = questionnaire.typingExperience !== 'never';
  const knowsTouchTyping = questionnaire.touchTypingKnowledge !== 'no';
  const canTypeWithoutLooking = questionnaire.canTypeWithoutLooking !== 'no';

  if (hasTypedBefore) score += 1;
  if (knowsTouchTyping) score += 1;
  if (canTypeWithoutLooking) score += 1;

  // Level assignment
  if (score <= 4) return 'BEGINNER';
  if (score <= 7) return 'INTERMEDIATE';
  return 'ADVANCED';
};

export const generateAssessmentText = () => {
  const homeRow = 'a s d f j k l ; a s d f j k l ;';
  const repeated = homeRow.split('').join(' ');
  return repeated;
};
