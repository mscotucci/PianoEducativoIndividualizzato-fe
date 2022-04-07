export interface PeiDocument {
    id: string;
    year: number | null;
    codiceSostitutivoPersonale: string;
    scuola: string;
    plessoSede: string;
    classe: string;
    dataRilascio: string | null;
    dataScadenza: string | null;
    dataRedazioneProfiloFunzionamento: string | null;
    profiloFunzionamentoDisponibile: boolean;
    dataRedazioneDiagnosiFunzionale: string | null;
    dataApprovazioneProfiloDinamicoFunzionale: string | null;
    dataRedazioneProgettoIndividuale: string | null;
    dataPeiProvvisorio: string | null;
    numeroVerbalePeiProvvisorio: string;
    dataPrimaSottoscrizione: string | null;
    numeroVerbalePrimaSottoscrizione: string;
    dataVerificaFinaleProposteASSuccessivo: string | null;
    numeroVerbaleVerificaFinaleProposteASSuccessivo: string;
    gruppoLavoroOperativo: GruppoLavoroOperativo;
    quadroInformativo: QuadroInformativo;
    elementoProfiloFunzionamento: ElementoProfiloFunzionamento;
    raccordoProgettoIndividuale: RaccordoProgettoIndividuale;
    interventiAlunno: InterventiAlunno;
    osservazioneContesto: OsservazioneContesto;
    interventiContestoAmbienteInclusivo: InterventiContestoAmbienteInclusivo;
}
export interface GruppoLavoroOperativo {
    operatori: OperatoreGruppoLavoroOperativo[];
}
export interface QuadroInformativo {
    info: string;
}
export interface RaccordoProgettoIndividuale {
    sintesiContenutoProgettoIndividuale: string;
    indicazioniRedazioneProgettoIndividuale: string;
}
export interface InterventiAlunno {
    infoRevisione: string;
    dataRevisione: string;
    infoVerificaConclusiva: string;
    dataVerificaConclusiva: string;
    dimensioni: DimensioneInterventiAllunno[];
}
export interface OsservazioneContesto {
    info: string;
    infoRevisione: string;
    dataRevisione: string;
}
export interface InterventiContestoAmbienteInclusivo {
    info: string;
    infoRevisione: string;
    dataRevisione: string;
    infoVerificaConclusiva: string;
    dataVerificaConclusiva: string;
}
export interface OperatoreGruppoLavoroOperativo {
    nome: string;
    cognome: string;
    titoloIntervento: string;
    dataModifica: string | null;
    tipoVariazioneOperatore: TipoVariazioneOperatoreGLO | null;
}
export enum TipoVariazioneOperatoreGLO {
    NuovoMembro,
    Sostituzione,
    Decadenza
}
export interface DimensioneProfiloFunzionamento {
    descrizione: string;
    sezione: string;
    vaOmessa: boolean;
    vaDefinita: boolean;
}
export interface ElementoProfiloFunzionamento {
    info: string;
    dimensioni: DimensioneProfiloFunzionamento[];
}
export interface DimensioneInterventiAllunno {
    obiettivi: string;
    attivita: string;
    strategieInterventi: string;
}