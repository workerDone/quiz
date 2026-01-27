import { QuizQuestionLevel } from '../quiz-question-level';
import { QuizQuestion } from '../quiz-view/quiz-question';

export const angularQuizData: QuizQuestion[] = [
  {
    id: 1,
    question: 'Что такое Angular?',
    options: [
      'JavaScript фреймворк для мобильных приложений',
      'TypeScript фреймворк для веб-приложений',
      'CSS препроцессор',
      'Node.js библиотека'
    ],
    correctAnswerIndexes: [1],
    allowMultipleAnswers: false,
    explanation: 'Angular — фреймворк на TypeScript от Google для создания динамических веб-приложений.',
    level: QuizQuestionLevel.Junior,
    topic: 'Angular Основы'
  },
  {
    id: 2,
    question: 'Выберите основные компоненты Angular',
    options: ['Компоненты', 'Сервисы', 'Директивы', 'jQuery'],
    correctAnswerIndexes: [0, 1, 2],
    allowMultipleAnswers: true,
    explanation: 'Компоненты, сервисы и директивы — основные блоки Angular.',
    level: QuizQuestionLevel.Junior,
    topic: 'Angular Архитектура'
  },
  {
    id: 3,
    question: 'Что возвращает subscribe() в RxJS?',
    options: ['Observable', 'Promise', 'Subscription', 'void'],
    correctAnswerIndexes: [2],
    allowMultipleAnswers: false,
    explanation: 'subscribe() возвращает объект Subscription для управления подпиской.',
    level: QuizQuestionLevel.Middle,
    topic: 'RxJS'
  },
  {
    id: 4,
    question: 'Какие операторы RxJS используются для преобразования данных?',
    options: ['map', 'filter', 'switchMap', 'subscribe'],
    correctAnswerIndexes: [0, 1, 2],
    allowMultipleAnswers: true,
    explanation: 'map, filter и switchMap — операторы для трансформации Observable.',
    level: QuizQuestionLevel.Middle,
    topic: 'RxJS Операторы'
  },
  {
    id: 5,
    question: 'Для чего используется декоратор @Injectable()?',
    options: [
      'Для создания компонента',
      'Для отметки класса как сервиса',
      'Для двусторонней привязки',
      'Для работы с HTTP'
    ],
    correctAnswerIndexes: [1],
    allowMultipleAnswers: false,
    explanation: '@Injectable() отмечает класс как сервис, доступный для внедрения зависимостей.',
    level: QuizQuestionLevel.Middle,
    topic: 'Сервисы'
  },
  {
    id: 6,
    question: 'Какие жизненные циклы компонента вы знаете?',
    options: [
      'ngOnInit',
      'ngOnDestroy',
      'ngAfterViewInit',
      'ngOnRender'
    ],
    correctAnswerIndexes: [0, 1, 2],
    allowMultipleAnswers: true,
    explanation: 'ngOnInit, ngOnDestroy, ngAfterViewInit — это хуки жизненного цикла компонента.',
    level: QuizQuestionLevel.Middle,
    topic: 'Жизненный цикл'
  },
  {
    id: 7,
    question: 'Как вводить зависимости в современном Angular?',
    options: [
      'Через конструктор',
      'Используя функцию inject()',
      'Через @Inject декоратор',
      'Все перечисленные выше'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'В Angular 14+ можно использовать все три метода для внедрения зависимостей.',
    level: QuizQuestionLevel.Middle,
    topic: 'Dependency Injection'
  },
  {
    id: 8,
    question: 'Что такое Signals в Angular?',
    options: [
      'Новая система реактивности',
      'Способ управления состоянием',
      'Замена для RxJS',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1],
    allowMultipleAnswers: true,
    explanation: 'Signals — современный способ управления состоянием и реактивностью в Angular 16+.',
    level: QuizQuestionLevel.Senior,
    topic: 'Signals'
  },
  {
    id: 9,
    question: 'Как предотвратить утечки памяти при работе с Observable?',
    options: [
      'Использовать takeUntilDestroyed()',
      'Отписываться в ngOnDestroy',
      'Использовать async pipe',
      'Все перечисленные выше'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'Существует несколько способов управления подписками и избежания утечек памяти.',
    level: QuizQuestionLevel.Senior,
    topic: 'Memory Management'
  },
  {
    id: 10,
    question: 'Для чего используется HttpClientModule?',
    options: [
      'Для HTTP запросов',
      'Для кэширования данных',
      'Для маршрутизации',
      'Для валидации форм'
    ],
    correctAnswerIndexes: [0],
    allowMultipleAnswers: false,
    explanation: 'HttpClientModule используется для отправки HTTP запросов к серверу.',
    level: QuizQuestionLevel.Junior,
    topic: 'HTTP'
  },
  {
    id: 11,
    question: 'Что делает двусторонняя привязка [(ngModel)]?',
    options: [
      'Обновляет шаблон при изменении модели',
      'Обновляет модель при изменении шаблона',
      'Обновляет и модель и шаблон',
      'Кэширует данные'
    ],
    correctAnswerIndexes: [2],
    allowMultipleAnswers: false,
    explanation: '[(ngModel)] синхронизирует данные между компонентом и шаблоном в обе стороны.',
    level: QuizQuestionLevel.Junior,
    topic: 'Data Binding'
  },
  {
    id: 12,
    question: 'Какие типы директив существуют в Angular?',
    options: [
      'Структурные (*ngIf, *ngFor)',
      'Атрибутные (ngClass, ngStyle)',
      'Компонентные директивы',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'В Angular существуют структурные, атрибутные и компонентные директивы.',
    level: QuizQuestionLevel.Middle,
    topic: 'Директивы'
  },
  {
    id: 13,
    question: 'Для чего используется RouterModule?',
    options: [
      'Для навигации между компонентами',
      'Для управления URL',
      'Для параметров маршрута',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'RouterModule обеспечивает навигацию, управление URL и параметры маршрутов.',
    level: QuizQuestionLevel.Middle,
    topic: 'Маршрутизация'
  },
  {
    id: 14,
    question: 'Что такое guards в Angular?',
    options: [
      'Функции для защиты маршрутов',
      'Проверка прав доступа',
      'Подтверждение перехода',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'Guards контролируют доступ к маршрутам и проверяют условия навигации.',
    level: QuizQuestionLevel.Senior,
    topic: 'Маршрутизация'
  },
  {
    id: 15,
    question: 'Какие способы валидации форм в Angular?',
    options: [
      'Template-driven forms',
      'Reactive forms',
      'Встроенные валидаторы',
      'Все перечисленные'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'Angular поддерживает оба подхода к формам с встроенными и кастомными валидаторами.',
    level: QuizQuestionLevel.Middle,
    topic: 'Формы'
  },
  {
    id: 16,
    question: 'Что является лучшей практикой для управления состоянием в Angular?',
    options: [
      'NgRx',
      'Akita',
      'Signals',
      'Все подходы допустимы'
    ],
    correctAnswerIndexes: [3],
    allowMultipleAnswers: false,
    explanation: 'Выбор зависит от требований проекта. Все подходы имеют свои преимущества.',
    level: QuizQuestionLevel.Senior,
    topic: 'State Management'
  },
  {
    id: 17,
    question: 'Для чего используется providedIn в @Injectable()?',
    options: [
      'Для регистрации сервиса в модуле',
      'Для tree-shaking неиспользуемого кода',
      'Для определения уровня доступности сервиса',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'providedIn управляет регистрацией сервиса и влияет на оптимизацию бандла.',
    level: QuizQuestionLevel.Senior,
    topic: 'Сервисы'
  },
  {
    id: 18,
    question: 'Как протестировать компоненты в Angular?',
    options: [
      'Используя Jasmine',
      'Используя Karma',
      'Используя TestBed',
      'Все верно'
    ],
    correctAnswerIndexes: [0, 1, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'Тестирование Angular использует Jasmine для спецификаций и Karma для запуска.',
    level: QuizQuestionLevel.Middle,
    topic: 'Тестирование'
  },
  {
    id: 19,
    question: 'Что такое AOT компиляция?',
    options: [
      'Компиляция во время сборки',
      'Компиляция в браузере',
      'Оптимизирует размер бандла',
      'Опции 1 и 3'
    ],
    correctAnswerIndexes: [0, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'AOT (Ahead-of-Time) компилирует приложение во время build, уменьшая размер и ускоряя загрузку.',
    level: QuizQuestionLevel.Senior,
    topic: 'Сборка'
  },
  {
    id: 20,
    question: 'Какие версии Angular поддерживают Standalone компоненты?',
    options: [
      'Angular 14+',
      'Angular 13+',
      'Angular 15+',
      'Angular 16+'
    ],
    correctAnswerIndexes: [0, 2, 3],
    allowMultipleAnswers: true,
    explanation: 'Standalone компоненты доступны с Angular 14 и улучшены в 15, 16 версиях.',
    level: QuizQuestionLevel.Middle,
    topic: 'Angular Компоненты'
  }
];
