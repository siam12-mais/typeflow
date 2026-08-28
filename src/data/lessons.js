// Lesson data for TypeFlow learning path

export const lessons = {
  BEGINNER: [
    {
      id: 'lesson-1',
      title: 'Introduction to Home Row',
      description: 'Learn about the home row and proper finger placement',
      keys: ['a', 's', 'd', 'f', 'j', 'k', 'l', ';'],
      focusKeys: [],
      exercises: [
        { text: 'a s d f j k l ;', type: 'keys', difficulty: 'easy' },
      ],
      duration: 5,
      difficulty: 'easy',
    },
    {
      id: 'lesson-2',
      title: 'Left Index Finger - F Key',
      description: 'Master the F key using your left index finger',
      keys: ['f'],
      focusKeys: ['f'],
      exercises: [
        { text: 'f f f f f f f f', type: 'keys', difficulty: 'easy' },
        { text: 'f a f a f a f a', type: 'keys', difficulty: 'easy' },
      ],
      duration: 5,
      difficulty: 'easy',
    },
    {
      id: 'lesson-3',
      title: 'Right Index Finger - J Key',
      description: 'Master the J key using your right index finger',
      keys: ['j'],
      focusKeys: ['j'],
      exercises: [
        { text: 'j j j j j j j j', type: 'keys', difficulty: 'easy' },
        { text: 'j ; j ; j ; j ;', type: 'keys', difficulty: 'easy' },
      ],
      duration: 5,
      difficulty: 'easy',
    },
    {
      id: 'lesson-4',
      title: 'F and J Together',
      description: 'Practice alternating between F and J keys',
      keys: ['f', 'j'],
      focusKeys: ['f', 'j'],
      exercises: [
        { text: 'f j f j f j f j', type: 'keys', difficulty: 'easy' },
        { text: 'j f j f j f j f', type: 'keys', difficulty: 'easy' },
      ],
      duration: 5,
      difficulty: 'easy',
    },
    {
      id: 'lesson-5',
      title: 'D and K Keys',
      description: 'Learn the D and K keys - middle fingers',
      keys: ['d', 'k'],
      focusKeys: ['d', 'k'],
      exercises: [
        { text: 'd k d k d k d k', type: 'keys', difficulty: 'easy' },
        { text: 'f d f k f d f k', type: 'keys', difficulty: 'medium' },
      ],
      duration: 5,
      difficulty: 'easy',
    },
    {
      id: 'lesson-6',
      title: 'S and L Keys',
      description: 'Learn the S and L keys - ring fingers',
      keys: ['s', 'l'],
      focusKeys: ['s', 'l'],
      exercises: [
        { text: 's l s l s l s l', type: 'keys', difficulty: 'easy' },
        { text: 'd s d l d s d l', type: 'keys', difficulty: 'medium' },
      ],
      duration: 5,
      difficulty: 'easy',
    },
    {
      id: 'lesson-7',
      title: 'A and Semicolon Keys',
      description: 'Learn the A and Semicolon keys - pinky fingers',
      keys: ['a', ';'],
      focusKeys: ['a', ';'],
      exercises: [
        { text: 'a ; a ; a ; a ;', type: 'keys', difficulty: 'easy' },
        { text: 's a s ; s a s ;', type: 'keys', difficulty: 'medium' },
      ],
      duration: 5,
      difficulty: 'easy',
    },
    {
      id: 'lesson-8',
      title: 'Complete Home Row',
      description: 'Master all home row keys together',
      keys: ['a', 's', 'd', 'f', 'j', 'k', 'l', ';'],
      focusKeys: ['a', 's', 'd', 'f', 'j', 'k', 'l', ';'],
      exercises: [
        { text: 'a s d f j k l ;', type: 'keys', difficulty: 'medium' },
        { text: 'f a s d j k l ;', type: 'keys', difficulty: 'medium' },
        { text: 'dad sad fad jab sad lad', type: 'words', difficulty: 'medium' },
      ],
      duration: 10,
      difficulty: 'medium',
    },
  ],
  INTERMEDIATE: [
    {
      id: 'lesson-int-1',
      title: 'Top Row - Left Side',
      description: 'Learn the top row keys on the left side: Q, W, E, R, T',
      keys: ['q', 'w', 'e', 'r', 't'],
      focusKeys: ['q', 'w', 'e', 'r', 't'],
      exercises: [
        { text: 'q w e r t q w e r t', type: 'keys', difficulty: 'medium' },
        { text: 'we are the best team', type: 'words', difficulty: 'hard' },
      ],
      duration: 10,
      difficulty: 'medium',
    },
    {
      id: 'lesson-int-2',
      title: 'Top Row - Right Side',
      description: 'Learn the top row keys on the right side: Y, U, I, O, P',
      keys: ['y', 'u', 'i', 'o', 'p'],
      focusKeys: ['y', 'u', 'i', 'o', 'p'],
      exercises: [
        { text: 'y u i o p y u i o p', type: 'keys', difficulty: 'medium' },
        { text: 'you put in your time', type: 'words', difficulty: 'hard' },
      ],
      duration: 10,
      difficulty: 'medium',
    },
  ],
  ADVANCED: [
    {
      id: 'lesson-adv-1',
      title: 'Speed Drills',
      description: 'Increase your typing speed with timed exercises',
      keys: ['a', 's', 'd', 'f', 'j', 'k', 'l', ';', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      focusKeys: [],
      exercises: [
        { text: 'the quick brown fox jumps over the lazy dog', type: 'words', difficulty: 'hard' },
        { text: 'pack my box with five dozen liquor jugs', type: 'words', difficulty: 'hard' },
      ],
      duration: 15,
      difficulty: 'hard',
    },
    {
      id: 'lesson-adv-2',
      title: 'Accuracy Training',
      description: 'Focus on accuracy while maintaining speed',
      keys: [],
      focusKeys: [],
      exercises: [
        { text: 'typing accuracy improves with consistent practice', type: 'words', difficulty: 'hard' },
        { text: 'precision and speed come with muscle memory building', type: 'words', difficulty: 'hard' },
      ],
      duration: 15,
      difficulty: 'hard',
    },
  ],
};

export const getLessonsByLevel = (level) => {
  return lessons[level] || lessons.BEGINNER;
};

export const getLessonById = (id) => {
  for (const level in lessons) {
    const lesson = lessons[level].find((l) => l.id === id);
    if (lesson) return lesson;
  }
  return null;
};
