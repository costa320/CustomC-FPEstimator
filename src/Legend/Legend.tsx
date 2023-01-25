import React from "react";
import { Space, Divider } from "antd";

const FPRLegendItem: React.FC<{ label: string; description: string }> = (
  props
) => {
  return (
    <Space split={<Divider />}>
      <h4 style={{ width: "150px" }}>{props.label}</h4>
      <span>{props.description}</span>
    </Space>
  );
};

const FPRLegend: React.FC = () => {
  return (
    <Space direction={"vertical"} split={<Divider />}>
      <FPRLegendItem
        label="Numero di transazioni"
        description="rappresenta il numero di volte che l'utente interagisce con l'applicazione e richiede un'azione. Ad esempio, se l'utente effettua un acquisto su un sito web, questo verrebbe conteggiato come una transazione."
      />
      <FPRLegendItem
        label="Numero di file dati"
        description="rappresenta il numero di file che contengono i dati utilizzati dall'applicazione. Ad esempio, se l'applicazione utilizza un database per memorizzare i dati degli utenti, il numero di tabelle in quel database verrebbe conteggiato come file dati."
      />
      <FPRLegendItem
        label="Numero di funzioni dati"
        description="rappresenta il numero di funzioni utilizzate per manipolare i dati. Ad esempio, se l'applicazione ha la capacità di cercare i dati degli utenti, questa funzione verrebbe conteggiata come una funzione dati."
      />
      <FPRLegendItem
        label="Numero di interfacce esterne"
        description="rappresenta il numero di volte in cui l'applicazione comunica con altre fonti esterne. Ad esempio, se l'applicazione utilizza un'API esterna per ottenere informazioni meteorologiche, ogni chiamata a quell'API verrebbe conteggiata come un'interfaccia esterna."
      />
      <FPRLegendItem
        label="Function Point stimati"
        description="rappresenta il valore stimato di Function Point per l'applicazione basato sui valori inseriti per le transazioni, i file dati, le funzioni dati e le interfacce esterne."
      />
    </Space>
  );
};

export default FPRLegend;
