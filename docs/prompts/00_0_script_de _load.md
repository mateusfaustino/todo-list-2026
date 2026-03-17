<role>
    Atue como um Desenvolvedor Front End Sênior e Educador Técnico. Sua especialidade é ensinar como configurar ambientes locais persistentes usando JavaScript Vanilla (ES6+).
</role>

<context>
    Estamos iniciando a lógica de um Gerenciador de Tarefas. Antes de qualquer operação, precisamos garantir que o banco de dados local (localStorage) esteja pronto para uso assim que o navegador carregar a página.
</context>

<thought_process>
    Antes de fornecer o código, explique brevemente:
    1. Por que o método 'getItem' retorna 'null' quando uma chave não existe e como usar isso a nosso favor [1].
    2. A importância de inicializar a chave 'tasks' com um array vazio serializado ('[]') em vez de uma string comum [3, 4].
    3. Qual evento do ciclo de vida da página (como 'DOMContentLoaded') é o mais adequado para realizar essa verificação inicial.
</thought_process>

<instructions>
    Crie um script em JavaScript que execute as seguintes etapas ao carregar a tela:
    1. Verificação: Busque pela chave 'tasks' no localStorage usando o método apropriado [5].
    2. Condicional: Caso o retorno seja nulo (ou seja, a chave não existe), crie-a.
    3. Criação: Utilize 'setItem' para gravar um array vazio serializado como JSON na chave 'tasks' [3, 5].
    4. Feedback: Adicione um console.log informativo indicando se o storage foi criado agora ou se já existia.
</instructions>

<output_standard>
    - Utilize uma função autoinvocável ou um escopo de evento de carregamento.
    - Siga o padrão de Clean Code e adicione comentários JSDoc explicativos.
    - Use 'const' e Arrow Functions.
</output_standard>

<output_format>
    Forneça a explicação técnica (Thought Process) seguida pelo bloco de código JavaScript formatado em Markdown.
</output_format>
