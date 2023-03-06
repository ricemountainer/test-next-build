import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType , GetServerSidePropsContext ,
         GetStaticProps , InferGetStaticPropsType, GetStaticPathsContext } from 'next';
import type { DataType } from '../types/type-def';

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const data:DataType = {name: 'ssr', dateString: new Date().toISOString()};
    return {
      props: {
        data: data
      }
    };
}

const Ssr: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ( props ,  ) =>{
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

export default Ssr;