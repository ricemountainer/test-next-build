import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType , GetServerSidePropsContext ,
         GetStaticProps , InferGetStaticPropsType, GetStaticPathsContext } from 'next';
import type { DataType } from '../types/type-def';

export const getStaticProps: GetStaticProps = async (context: GetStaticPathsContext) => {
    const data:DataType = {name: 'ssg', dateString: new Date().toISOString()};
    return {
      props: {
        data: data
      }
    };
}

const Ssg: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ( props ,  ) =>{
    const data:DataType = props.data;
    //console.log(`obj=${JSON.stringify(obj)}`);
    return (
        <div>
            <p>
                name: {data.name}
            </p>
            <p>
                datetime : {data.dateString}
            </p>
        </div>
    );
}

export default Ssg;