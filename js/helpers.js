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