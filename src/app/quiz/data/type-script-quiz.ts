import { QuizQuestionLevel } from '../quiz-view/quiz-question-level';
import { QuizQuestionModel } from '../quiz-view/quiz-question.model';

export const typeScriptQuizData: QuizQuestionModel[] = [
  {
    id: 1,
    question: 'Что такое TypeScript?',
    options: [
      'Надмножество JavaScript с типами',
      'Язык программирования, компилируется в JavaScript',
      'Фреймворк для веб-приложений',
      'Опции 1 и 2'
    ],
    correctAnswerIndexes: [3],
    allowMultipleAnswers: false,
    explanation: 'TypeScript — это надмножество JavaScript, которое добавляет статическую типизацию и компилируется в JavaScript.',
    level: QuizQuestionLevel.Junior,
    topic: 'TypeScript Основы'
  },
  {
    id: 2,
    question: 'Какие базовые типы данных в TypeScript?',
    options: [
      'number, string, boolean',
      'any, unknown, void, never',
      'object, array, tuple',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'TypeScript поддерживает все примитивные типы JavaScript плюс дополнительные типы.',
    level: QuizQuestionLevel.Junior,
    topic: 'Типы данных'
  },
  {
    id: 3,
    question: 'Что такое interface в TypeScript?',
    options: [
      'Контракт для структуры объекта',
      'Способ определить форму данных',
      'Может быть слит с другим interface',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'Interface определяет контракт для структуры объекта и поддерживает слияние.',
    level: QuizQuestionLevel.Junior,
    topic: 'Interfaces'
  },
  {
    id: 4,
    question: 'В чём разница между interface и type в TypeScript?',
    options: [
      'interface может быть слит с другим interface',
      'type может использоваться для примитивов',
      'interface для объектов, type для остального',
      'Опции 1 и 2'
    ],
    correctAnswerIndexes: [3],
    allowMultipleAnswers: false,
    explanation: 'interface подходит для объектов и поддерживает слияние, type более универсален.',
    level: QuizQuestionLevel.Middle,
    topic: 'Type System'
  },
  {
    id: 5,
    question: 'Что такое union типы в TypeScript?',
    options: [
      'Тип может быть одним из нескольких значений',
      'Комбинация нескольких типов',
      'Использует оператор |',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'Union типы позволяют переменной быть одним из нескольких типов.',
    level: QuizQuestionLevel.Middle,
    topic: 'Advanced Types'
  },
  {
    id: 6,
    question: 'Что такое intersection типы в TypeScript?',
    options: [
      'Комбинирует несколько типов в один',
      'Использует оператор &',
      'Объединяет все свойства типов',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'Intersection типы объединяют несколько типов в один, включая все их свойства.',
    level: QuizQuestionLevel.Middle,
    topic: 'Advanced Types'
  },
  {
    id: 7,
    question: 'Что такое generic типы в TypeScript?',
    options: [
      'Способ создать переиспользуемые компоненты',
      'Типы с параметрами',
      'Позволяют работать с разными типами',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'Generic типы позволяют создавать компоненты, работающие с разными типами данных.',
    level: QuizQuestionLevel.Middle,
    topic: 'Generics'
  },
  {
    id: 8,
    question: 'Что такое enum в TypeScript?',
    options: [
      'Перечисление именованных констант',
      'Способ задать набор именованных значений',
      'Может быть числовым или строковым',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'Enum позволяет определить набор именованных констант, числовых или строковых.',
    level: QuizQuestionLevel.Junior,
    topic: 'Enums'
  },
  {
    id: 9,
    question: 'Что такое mapped типы в TypeScript?',
    options: [
      'Создают новые типы на основе существующих',
      'Используют keyof оператор',
      'Позволяют трансформировать свойства',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'Mapped типы создают новые типы путём трансформации свойств существующих типов.',
    level: QuizQuestionLevel.Senior,
    topic: 'Advanced Types'
  },
  {
    id: 10,
    question: 'Что такое conditional типы в TypeScript?',
    options: [
      'Типы, которые зависят от условия',
      'Используют ternary оператор',
      'Синтаксис: T extends U ? X : Y',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'Conditional типы выбирают один из двух типов на основе условия.',
    level: QuizQuestionLevel.Senior,
    topic: 'Advanced Types'
  },
  {
    id: 11,
    question: 'Что означает readonly модификатор в TypeScript?',
    options: [
      'Свойство нельзя изменить после инициализации',
      'Работает как const для объектов',
      'Можно использовать на методах',
      'Опции 1 и 2'
    ],
    correctAnswerIndexes: [0, 1, 2],
    allowMultipleAnswers: true,
    explanation: 'readonly предотвращает модификацию свойства после его инициализации.',
    level: QuizQuestionLevel.Middle,
    topic: 'Modifiers'
  },
  {
    id: 12,
    question: 'Что такое utility типы в TypeScript?',
    options: [
      'Встроенные типы для трансформации',
      'Partial, Pick, Omit, Record и т.д.',
      'Помогают создавать новые типы из существующих',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'Utility типы — встроенные инструменты для часто используемых трансформаций типов.',
    level: QuizQuestionLevel.Middle,
    topic: 'Utility Types'
  },
  {
    id: 13,
    question: 'Что такое type guard в TypeScript?',
    options: [
      'Техника сужения типа внутри условия',
      'Использует typeof, instanceof или is',
      'Помогает TypeScript понять точный тип',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'Type guard сужает тип переменной внутри условного блока.',
    level: QuizQuestionLevel.Middle,
    topic: 'Type Narrowing'
  },
  {
    id: 14,
    question: 'Что такое декораторы в TypeScript?',
    options: [
      'Синтаксис для аннотирования классов и методов',
      'Функции, которые модифицируют класс или метод',
      'Используются в Angular',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'Декораторы — это функции для аннотирования и модификации классов, методов и свойств.',
    level: QuizQuestionLevel.Senior,
    topic: 'Decorators'
  },
  {
    id: 15,
    question: 'Что такое namespace в TypeScript?',
    options: [
      'Способ организации кода в логические группы',
      'Устаревший способ модульности',
      'Используется вместо ES6 модулей',
      'Может быть вложенным'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'Namespace — способ организации кода, но в современном TypeScript предпочитают модули.',
    level: QuizQuestionLevel.Middle,
    topic: 'Modules'
  },
  {
    id: 16,
    question: 'Что такое declaration merging в TypeScript?',
    options: [
      'Возможность определить interface дважды',
      'Интерфейсы объединяются автоматически',
      'Возможна с классами и модулями',
      'Опции 1 и 2'
    ],
    correctAnswerIndexes: [0, 1, 2],
    allowMultipleAnswers: true,
    explanation: 'Declaration merging позволяет определить interface/namespace несколько раз.',
    level: QuizQuestionLevel.Senior,
    topic: 'Advanced Concepts'
  },
  {
    id: 17,
    question: 'Что такое strict mode в TypeScript?',
    options: [
      'Включает строгие проверки типов',
      'Флаг "strict" в tsconfig.json',
      'Включает несколько других флагов',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'Strict mode включает набор строгих проверок для лучшего качества кода.',
    level: QuizQuestionLevel.Junior,
    topic: 'Configuration'
  },
  {
    id: 18,
    question: 'Что означает unknown тип в TypeScript?',
    options: [
      'Самый общий тип, как any',
      'Более безопасен, чем any',
      'Требует type guard перед использованием',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'unknown — безопасная альтернатива any, требующая проверки типа перед использованием.',
    level: QuizQuestionLevel.Middle,
    topic: 'Types'
  },
  {
    id: 19,
    question: 'Что такое never тип в TypeScript?',
    options: [
      'Тип, который никогда не существует',
      'Используется в функциях, которые никогда не возвращают значение',
      'Используется при исчерпывающей проверке',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'never — тип для функций, которые выбрасывают исключение или никогда не возвращаются.',
    level: QuizQuestionLevel.Senior,
    topic: 'Types'
  },
  {
    id: 20,
    question: 'Как настроить tsconfig.json для strict типизации?',
    options: [
      'Установить "strict": true',
      'Включить strictNullChecks',
      'Включить noImplicitAny',
      'Опции 1 и 2'
    ],
    correctAnswerIndexes: [0, 1, 2],
    allowMultipleAnswers: true,
    explanation: 'Для строгой типизации используют флаг "strict" или отдельные строгие флаги в tsconfig.json.',
    level: QuizQuestionLevel.Junior,
    topic: 'Configuration'
  }
];
