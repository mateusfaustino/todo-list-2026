/**
 * Inicializa a chave "tasks" no localStorage caso ela ainda não exista.
 * Essa rotina garante que o restante da aplicação sempre encontre
 * uma estrutura válida para trabalhar.
 */
document.addEventListener('DOMContentLoaded', () => {
    /**
     * Verifica se a chave "tasks" já existe no localStorage.
     * Se não existir, cria a chave com um array vazio serializado.
     *
     * @returns {void}
     */
    const initializeTasksStorage = () => {
        const tasksStorage = localStorage.getItem('tasks');

        if (tasksStorage === null) {
            localStorage.setItem('tasks', JSON.stringify([]));
            console.log('Storage inicializado: a chave "tasks" foi criada com um array vazio.');
            return;
        }

        console.log('Storage já existente: a chave "tasks" já estava disponível.');
    };

    initializeTasksStorage();
});

/**
 * Completa um número com zero à esquerda até que ele tenha dois dígitos.
 *
 * @param {number} value - Valor numérico que será formatado.
 * @returns {string} Valor formatado com dois dígitos.
 */
const padTwoDigits = (value) => String(value).padStart(2, '0');

/**
 * Gera um ID único baseado na data e hora atual
 * no formato YYYYmmddHHmmss.
 *
 * @returns {string} ID da tarefa.
 */
const generateTaskId = () => {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = padTwoDigits(currentDate.getMonth() + 1);
    const day = padTwoDigits(currentDate.getDate());
    const hours = padTwoDigits(currentDate.getHours());
    const minutes = padTwoDigits(currentDate.getMinutes());
    const seconds = padTwoDigits(currentDate.getSeconds());

    return `${year}${month}${day}${hours}${minutes}${seconds}`;
};

/**
 * Recupera a lista de tarefas salva no localStorage.
 * Caso a chave não exista ou esteja vazia, retorna um array vazio.
 *
 * @returns {Array<{description: string, id: string, status: string}>}
 * Lista de tarefas armazenadas.
 */
const getStoredTasks = () => {
    const storedTasks = localStorage.getItem('tasks');

    if (!storedTasks) {
        return [];
    }

    return JSON.parse(storedTasks);
};

/**
 * Cria uma nova tarefa com estrutura padronizada,
 * adiciona essa tarefa à lista existente
 * e salva novamente no localStorage.
 *
 * @param {string} description - Descrição da tarefa.
 * @returns {{description: string, id: string, status: string}}
 * Objeto da tarefa recém-criada.
 */
const saveTask = (description) => {
    const tasks = getStoredTasks();

    const newTask = {
        description: description,
        id: generateTaskId(),
        status: 'pending'
    };

    tasks.push(newTask);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    return newTask;
};