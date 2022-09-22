import moment from "moment";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
class ReportService {
  complexityOptions = { 0: "Baixo", 1: "Médio", 2: "Alta" };
  priorityOptions = { 0: "Baixa", 1: "Média", 2: "Alta", 3: "Muito Alta" };

  typeOptions = {
    0: "Requisito Funcional (RF)",
    1: "Requisito Não Funcional (RNF)",
  };

  generateSoftwareReport(data) {
    const jsPDFPlugin = new jsPDF({
      unit: "px",
      orientation: "portrait",
    });

    autoTable(jsPDFPlugin, {
      columnStyles: {
        requirements: {
          halign: "center",
          textColor: "green",
          valign: "bottom",
        },
      },
      body: this.#organizeSoftwares(data),
      columns: [
        { header: "Descrição", dataKey: "description" },
        { header: "Nome", dataKey: "name" },
        { header: "Criação", dataKey: "created_at" },
        { header: "Requisitos", dataKey: "requirements" },
      ],
      theme: "striped",
    });

    jsPDFPlugin.save("software");
  }

  generateRequirementsReport(data) {
    const jsPDFPlugin = new jsPDF({
      unit: "px",
      orientation: "portrait",
    });

    autoTable(jsPDFPlugin, {
      columnStyles: {},
      body: this.#organizeRequirements(data),
      columns: [
        { header: "Descrição", dataKey: "description" },
        { header: "Nome", dataKey: "name" },
        { header: "Prioridade", dataKey: "priority" },
        { header: "Complexidade", dataKey: "complexity" },
        { header: "Tipo", dataKey: "type" },
        { header: "Versão", dataKey: "version" },
        { header: "Criação", dataKey: "created_at" },
        { header: "Ativo", dataKey: "active" },
      ],
      theme: "striped",
    });

    jsPDFPlugin.save("requirement");
  }

  #organizeSoftwares(data) {
    return data.map((item) => ({
      ...item,
      created_at: moment(item.created_at).format("DD/MM/YYYY"),
      requirements: item.requirements.map((item) => item.name).join(","),
    }));
  }

  /**
   * @ data {Array}
   * */
  #organizeRequirements(data) {
    return data.map((item) => ({
      ...item,
      created_at: moment(item.created_at).format("DD/MM/YYYY"),
      priority: this.priorityOptions[item.priority],
      complexity: this.complexityOptions[item.complexity],
      type: this.typeOptions[item.type],
      active: item.active ? "Sim" : "Não",
    }));
  }
}

export const reportService = new ReportService();
