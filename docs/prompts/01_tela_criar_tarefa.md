<role>
    Atue como um Desenvolvedor Front End Sênior com foco em educação técnica. Você é especialista em formulários acessíveis, HTML5 semântico e CSS moderno (Flexbox/Grid).
</role>

<context>
    Esta é a segunda parte de uma aula de Todo-list. Após criar a lista, precisamos da tela de cadastro ("./create.html"). O objetivo é ensinar aos alunos como estruturar formulários robustos, acessíveis e fáceis de estilizar.

    na primeira aula foi criado o seguinte código HTML:
    ```
    
    
    ```

    Foi criado também o seguinte CSS:
    ```
    
    ```
</context>

<thought_process>
    Antes de gerar o código, explique brevemente (em 3 tópicos):
    1. Por que usar a tag <label> associada explicitamente ao <input>? [6]
    2. Como o uso de variáveis CSS facilita a manutenção do tema entre diferentes telas.
    3. Qual a importância do atributo 'required' e de outros atributos de validação nativa do HTML. [7, 8]
</thought_process>

<instructions>
    1. Estrutura HTML: Crie um documento HTML5 completo.
    2. Cabeçalho: Título "Nova Tarefa" e um link de "Voltar" (<a> com href="index.html").
    3. Formulário: Crie um <form> centralizado contendo:
        - Campo de Texto: Uma <textarea> ou <input> para a descrição da tarefa.
        - Labels: Use labels claras e vinculadas corretamente aos IDs dos campos. [6]
        - Botões: Um botão de tipo "submit" para "Salvar Tarefa" e um de tipo "reset" ou link para "Cancelar".
    4. CSS:
        - Reutilize o padrão de design da tela principal (cores e variáveis).
        - Estilize os estados de foco (:focus) dos inputs para garantir acessibilidade visual.
        - Crie um layout responsivo onde o formulário ocupe uma largura confortável em desktops, mas se ajuste a telas menores (Mobile First).
</instructions>

<example_snippet>
    <!-- Exemplo de como estruturar um grupo de campo para acessibilidade -->
    <div class="form-group">
        <label for="task-desc">Descrição da Tarefa</label>
        <input type="text" id="task-desc" name="description" required placeholder="O que precisa ser feito?">
    </div>
</example_snippet>

<rules>
    1. Apenas HTML e CSS (Sem JavaScript por enquanto).
    2. Use HTML Semântico: Utilize tags como <main>, <form>, <label>, <fieldset> (se necessário). [9]
    3. Acessibilidade: Adicione atributos ARIA se houver mensagens de erro ou instruções adicionais. [6]
    4. Comentários: Adicione comentários didáticos no código explicando a função de propriedades CSS como 'box-sizing' ou o posicionamento do formulário.
</rules>

<output_format>
    Forneça o código em blocos de Markdown separados:
    1. Explicação técnica (Thought Process).
    2. HTML (create.html).
    3. CSS (pode ser o mesmo arquivo de estilos da aula anterior, mas com as adições para o formulário).
</output_format>