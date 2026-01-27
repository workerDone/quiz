import { QuizLevel } from '../quiz-level';
import { QuizViewModel } from '../quiz-view/quiz-view.model';

export const javaScriptQuizData: QuizViewModel[] = [
  {
    id: 1,
    question: 'Какие примитивные типы данных существуют в JavaScript?',
    options: [
      'string, number, boolean',
      'undefined, null, symbol',
      'object, array, function',
      'Опции 1 и 2'
    ],
    correctAnswerIndexes: [3],
    allowMultipleAnswers: false,
    explanation: 'JavaScript имеет примитивные типы: string, number, boolean, undefined, null, symbol и bigint.',
    level: QuizLevel.Junior,
    topic: 'Типы данных'
  },
  {
    id: 2,
    question: 'Что такое hoisting в JavaScript?',
    options: [
      'Подъём переменных и функций в начало области видимости',
      'Механизм асинхронного выполнения',
      'Способ оптимизации памяти',
      'Процесс минификации кода'
    ],
    correctAnswerIndexes: [0],
    allowMultipleAnswers: false,
    explanation: 'Hoisting — это поведение, при котором объявления переменных и функций перемещаются в начало области видимости.',
    level: QuizLevel.Junior,
    topic: 'Область видимости'
  },
  {
    id: 3,
    question: 'В чём разница между var, let и const?',
    options: [
      'var имеет функциональную область видимости',
      'let и const имеют блочную область видимости',
      'const не может быть переприсвоен',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'var — функциональная область, let/const — блочная область, const нельзя переприсвоить.',
    level: QuizLevel.Junior,
    topic: 'Переменные'
  },
  {
    id: 4,
    question: 'Что возвращает typeof для массива?',
    options: ['array', 'object', 'list', 'undefined'],
    correctAnswerIndexes: [1],
    allowMultipleAnswers: false,
    explanation: 'typeof для массива возвращает "object", так как в JavaScript массивы являются объектами.',
    level: QuizLevel.Junior,
    topic: 'Типы данных'
  },
  {
    id: 5,
    question: 'Что такое замыкание (closure)?',
    options: [
      'Функция, которая имеет доступ к переменным внешней функции',
      'Способ завершения выполнения программы',
      'Процесс компиляции кода',
      'Ошибка в JavaScript'
    ],
    correctAnswerIndexes: [0],
    allowMultipleAnswers: false,
    explanation: 'Замыкание — функция с доступом к переменным области видимости, в которой она была создана.',
    level: QuizLevel.Middle,
    topic: 'Функции'
  },
  {
    id: 6,
    question: 'Какие способы создания объектов в JavaScript вы знаете?',
    options: [
      'Литерал объекта {}',
      'Конструктор Object()',
      'Конструктор класса',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'В JavaScript есть несколько способов создания объектов: литералы, конструкторы и классы.',
    level: QuizLevel.Middle,
    topic: 'Объекты'
  },
  {
    id: 7,
    question: 'Как работает this в JavaScript?',
    options: [
      'Указывает на глобальный объект',
      'Указывает на объект, вызвавший метод',
      'Зависит от способа вызова функции',
      'Всегда указывает на объект класса'
    ],
    correctAnswerIndexes: [1, 2],
    allowMultipleAnswers: true,
    explanation: 'Значение this зависит от того, как была вызвана функция и в каком контексте.',
    level: QuizLevel.Middle,
    topic: 'Контекст'
  },
  {
    id: 8,
    question: 'Что такое прототип в JavaScript?',
    options: [
      'Шаблон для создания объектов',
      'Объект, который используется для наследования',
      'Функция-конструктор',
      'Опции 1 и 2'
    ],
    correctAnswerIndexes: [3],
    allowMultipleAnswers: false,
    explanation: 'Прототип — объект, используемый как образец для наследования свойств и методов.',
    level: QuizLevel.Middle,
    topic: 'Прототипы'
  },
  {
    id: 9,
    question: 'Что возвращает Promise в JavaScript?',
    options: [
      'Значение, полученное асинхронно',
      'Объект с состояниями pending, fulfilled, rejected',
      'Функцию обратного вызова',
      'Опции 1 и 2'
    ],
    correctAnswerIndexes: [3],
    allowMultipleAnswers: false,
    explanation: 'Promise возвращает значение асинхронно и имеет три состояния.',
    level: QuizLevel.Middle,
    topic: 'Promise и async/await'
  },
  {
    id: 10,
    question: 'В чём разница между == и === в JavaScript?',
    options: [
      '== сравнивает только значения',
      '=== сравнивает значение и тип',
      '== выполняет приведение типов',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: '== выполняет приведение типов, === строгое сравнение без приведения типов.',
    level: QuizLevel.Junior,
    topic: 'Операторы сравнения'
  },
  {
    id: 11,
    question: 'Какие методы массива вы знаете для трансформации?',
    options: [
      'map, filter, reduce',
      'forEach, find, some',
      'includes, indexOf, slice',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'JavaScript предоставляет множество методов для работы с массивами.',
    level: QuizLevel.Middle,
    topic: 'Методы массива'
  },
  {
    id: 12,
    question: 'Что такое деструктуризация в JavaScript?',
    options: [
      'Синтаксис для извлечения значений из объектов и массивов',
      'Разбор объекта на части',
      'Удаление свойств объекта',
      'Способ оптимизации памяти'
    ],
    correctAnswerIndexes: [0, 1],
    allowMultipleAnswers: true,
    explanation: 'Деструктуризация позволяет извлекать значения из объектов и массивов удобным синтаксисом.',
    level: QuizLevel.Middle,
    topic: 'Синтаксис'
  },
  {
    id: 13,
    question: 'Как работает spread оператор (...) в JavaScript?',
    options: [
      'Разворачивает элементы массива или объекта',
      'Создаёт поверхностную копию',
      'Объединяет массивы или объекты',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'Spread оператор распаковывает элементы, используется для копирования и слияния.',
    level: QuizLevel.Middle,
    topic: 'Операторы'
  },
  {
    id: 14,
    question: 'Что такое Event Loop в JavaScript?',
    options: [
      'Механизм выполнения асинхронного кода',
      'Очередь для выполнения callback функций',
      'Способ управления памятью',
      'Опции 1 и 2'
    ],
    correctAnswerIndexes: [3],
    allowMultipleAnswers: false,
    explanation: 'Event Loop управляет выполнением асинхронного кода и callback функций.',
    level: QuizLevel.Senior,
    topic: 'Асинхронность'
  },
  {
    id: 15,
    question: 'Какие способы обработки ошибок в JavaScript?',
    options: [
      'try/catch блоки',
      '.catch() для Promise',
      'try/catch в async/await',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'JavaScript поддерживает несколько механизмов обработки ошибок.',
    level: QuizLevel.Middle,
    topic: 'Обработка ошибок'
  },
  {
    id: 16,
    question: 'Что такое JSON в JavaScript?',
    options: [
      'Формат обмена данными',
      'Встроенный объект для работы с JSON',
      'JavaScript Object Notation',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'JSON — формат данных, и в JavaScript есть встроенный объект JSON для работы с ним.',
    level: QuizLevel.Junior,
    topic: 'JSON'
  },
  {
    id: 17,
    question: 'Как работает паттерн Module в JavaScript?',
    options: [
      'Изолирует код в закрытой области видимости',
      'Использует замыкания для приватных данных',
      'Экспортирует только нужный функционал',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'Module паттерн использует замыкания для создания приватного пространства имён.',
    level: QuizLevel.Senior,
    topic: 'Паттерны'
  },
  {
    id: 18,
    question: 'Что такое this binding в JavaScript?',
    options: [
      'Способ явно установить контекст функции',
      'Методы call, apply и bind',
      'Стрелочные функции сохраняют this',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'Binding позволяет управлять контекстом через call, apply, bind и стрелочные функции.',
    level: QuizLevel.Senior,
    topic: 'Контекст'
  },
  {
    id: 19,
    question: 'Какие стандарты JavaScript вы знаете?',
    options: [
      'ES5 (2009)',
      'ES6/ES2015 (2015)',
      'ESNext (ежегодные обновления)',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'JavaScript развивается согласно стандартам ECMAScript, выпускаемым ежегодно.',
    level: QuizLevel.Middle,
    topic: 'Стандарты'
  },
  {
    id: 20,
    question: 'Что такое Web API в браузере?',
    options: [
      'Интерфейсы для работы с документом',
      'API для сетевых запросов (fetch)',
      'API для хранилища данных (localStorage)',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'Web API — набор интерфейсов для взаимодействия с браузером и веб-платформой.',
    level: QuizLevel.Middle,
    topic: 'Web API'
  }
];
