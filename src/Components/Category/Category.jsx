import React from "react";
import CategotyItem from "./CategotyItem";
import tech from "../../assets/Category-icons/tech.svg";
import mercado from "../../assets/Category-icons/supermercados.svg";
import bebidas from "../../assets/Category-icons/bebidas.svg";
import ferramentas from "../../assets/Category-icons/ferramentas.svg";
import saude from "../../assets/Category-icons/saude.svg";
import fitness from "../../assets/Category-icons/fitness.svg";
import moda from "../../assets/Category-icons/moda.svg";

const Category = () => {
  return (
    <section className="container categoryContainer">
      <nav aria-label="Categorias">
        <ul className="categoryItemsList">
          <li>
            <CategotyItem
              type="Tecnologia"
              icon={tech}
              alt="Ícone de aparelhos eletrônicos que leva para produtos de técnologia"
            />
          </li>
          <li>
            <CategotyItem
              type="Supermercado"
              icon={mercado}
              alt="Ícone de um supermercado"
            />
          </li>
          <li>
            <CategotyItem
              type="Bebidas"
              icon={bebidas}
              alt="Ícone de uma Garrafa e um copo para produtos bebidas"
            />
          </li>
          <li>
            <CategotyItem
              type="Ferramentas"
              icon={ferramentas}
              alt="Ícone de Ferramentas para produtos ferramentas"
            />
          </li>
          <li>
            <CategotyItem
              type="Saúde"
              icon={saude}
              alt="Ícone de uma mão e um Coração acima para produção de saúde"
            />
          </li>
          <li>
            <CategotyItem
              type="Esportes e Fitness"
              icon={fitness}
              alt="Ícone de Homem correndo na esteira para produtos fitness"
            />
          </li>
          <li>
            <CategotyItem
              type="Moda"
              icon={moda}
              alt="Ícone de vestidos e acessórios para produtos de moda"
            />
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Category;
