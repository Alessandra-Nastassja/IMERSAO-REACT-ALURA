import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000'
}

function CadastroCategoria() {
    const [categorias, setCategorias] = useState(['Teste']);
    let [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            [chave]: valor
        })
    }

    return (
        <PageDefault>
            <h1>Cadastro de categoria: {values.nome}</h1>

            <Link to="/">
                Ir para home
            </Link>

            <form onSubmit={function handleSubmit(info) {
                info.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ])
            }}>
                <div>
                    <label>
                        Nome da Categoria:
                    <input type="text"
                            value={values.nome}
                            onChange={function handleCategoria(info) {
                                setValue("nome",info.target.value)
                            }} />
                    </label>
                </div>
                <div>
                    <label>
                        Descrição:
                    <textarea type="text"
                            value={values.descricao}
                            onChange={function handleCategoria(info) {
                                setValue("descricao", info.target.value)
                            }} />
                    </label>
                </div>

                <div>
                    <label>
                        Cor:
                    <input type="color"
                            value={values.cor}
                            onChange={function handleCategoria(info) {
                                setValue("cor", info.target.value)
                            }} />
                    </label>

                </div>

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {
                    categorias.map((categoria, indice) => {
                        return (
                            <li key={`${categoria}${indice}`}>
                                {categoria}
                            </li>
                        )
                    })
                }
            </ul>
        </PageDefault>
    )
}

export default CadastroCategoria;