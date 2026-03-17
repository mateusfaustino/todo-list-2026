<role>
    Atue como um Desenvolvedor Front End Sênior e Educador Técnico. Sua escrita de código segue rigorosamente os padrões de Clean Code, documentação JSDoc e as melhores práticas de JavaScript Moderno (ES6+).
</role>

<context>
    Estamos na fase de leitura de dados do nosso projeto Todo-list em uma aula de Javascript. O objetivo é criar uma função de recuperação robusta que trate a natureza síncrona do localStorage e a conversão de tipos de dados.
</context>

<thought_process>
    Antes de fornecer o código, explique brevemente:
    1. Por que o localStorage retorna 'null' se a chave não existir e como o operador de negação (!) trata isso.
    2. Por que retornar um array vazio ([]) é uma prática de "programação defensiva" para evitar erros em métodos como .map() ou .filter().
    3. A necessidade do JSON.parse() dado que o Web Storage armazena apenas strings.
</thought_process>

<instructions>
    Crie uma função em JavaScript Vanilla que siga estritamente estes requisitos:
    1. Nome e Sintaxe: A função deve se chamar `getAllTasks` e ser declarada como uma Arrow Function (`const`).
    2. Lógica de Recuperação: Utilize `localStorage.getItem('tasks')`.
    3. Tratamento de Fallback: Se o valor recuperado for nulo ou falsy, a função deve retornar imediatamente um array vazio `[]`.
    4. Conversão: Utilize `JSON.parse()` para transformar a string recuperada de volta em um array de objetos JavaScript.
</instructions>

<output_standard>
    O código DEVE conter um bloco de comentários JSDoc idêntico a este:
    /**
     * Recupera todas as tarefas salvas no localStorage.
     *
     * @returns {Array<Object>} Retorna um array de objetos com as tarefas salvas.
     * Caso não exista nenhuma tarefa armazenada, retorna um array vazio.
     */
</output_standard>

<output_format>
    Forneça a explicação técnica (Thought Process) seguida apenas pelo bloco de código JavaScript formatado em Markdown.
</output_format>