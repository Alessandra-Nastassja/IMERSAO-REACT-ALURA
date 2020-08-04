import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
}

function CadastroCategoria() {
    const [categorias, setCategorias] = useState([]);
    let [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleCategoria(info) {
        const { getAttribute, value } = info.target;
        setValue(
            getAttribute('name'),
            value
        )
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
                setValues(valoresIniciais);
            }}>

                <FormField
                    label="Nome"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleCategoria}
                />
                <FormField
                    label="Descrição"
                    type="color"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleCategoria}
                />
                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleCategoria}
                />

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {
                    categorias.map((categoria, indice) => {
                        return (
                            <li key={`${categoria}${indice}`}>
                                {categoria.nome}
                            </li>
                        )
                    })
                }
            </ul>
        </PageDefault>
    )
}

export default CadastroCategoria;