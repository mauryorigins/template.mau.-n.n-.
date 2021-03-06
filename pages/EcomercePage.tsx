// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import InDevPage from 'CComps/InDevPage';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function EcomercePage(): ReactElement {
  const finishDate = new Date('October 22, 2021 03:24:00');
  return (
    <>
      <Head>
        <title>Forge | Crea tu comercio en linea</title>
      </Head>
      <InDevPage compName="Ecomerce" finishDate={finishDate as unknown as number} />
    </>
  );
}
