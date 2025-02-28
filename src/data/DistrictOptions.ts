import { AAL } from "./districts/AAL.ts"
import { ARI } from "./districts/ARI.ts"
import { BRL } from "./districts/BRL.ts"
import { CAC } from "./districts/CAC.ts"
import { CDU } from "./districts/CDU.ts"
import { CMB } from "./districts/CMB.ts"
import { CTI } from "./districts/CTI.ts"
import { FRE } from "./districts/FRE.ts"
import { IGU } from "./districts/IGU.ts"
import { JAB } from "./districts/JAB.ts"
import { JBO } from "./districts/JBO.ts"
import { JDS } from "./districts/JDS.ts"
import { LIB } from "./districts/LIB.ts"
import { MOE } from "./districts/MOE.ts"
import { PEN } from "./districts/PEN.ts"
import { PQC } from "./districts/PQC.ts"
import { PRS } from "./districts/PRS.ts"
import { SAC } from "./districts/SAC.ts"
import { SCE } from "./districts/SCE.ts"
import { SMI } from "./districts/SMI.ts"
import { STN } from "./districts/STN.ts"
import { VAN } from "./districts/VAN.ts"
import { VJA } from "./districts/VJA.ts"
import { VMR } from "./districts/VMR.ts"
import { ANH } from "./districts/ANH.ts"
import { BEL } from "./districts/BEL.ts"
import { BRS } from "./districts/BRS.ts"
import { CAD } from "./districts/CAD.ts"
import { CGR } from "./districts/CGR.ts"
import { CNG } from "./districts/CNG.ts"
import { CUR } from "./districts/CUR.ts"
import { GRA } from "./districts/GRA.ts"
import { IPA } from "./districts/IPA.ts"
import { JAC } from "./districts/JAC.ts"
import { JDA } from "./districts/JDA.ts"
import { JRE } from "./districts/JRE.ts"
import { LIM } from "./districts/LIM.ts"
import { MOO } from "./districts/MOO.ts"
import { PIN } from "./districts/PIN.ts"
import { PRA } from "./districts/PRA.ts"
import { REP } from "./districts/REP.ts"
import { SAM } from "./districts/SAM.ts"
import { SDO } from "./districts/SDO.ts"
import { SMT } from "./districts/SMT.ts"
import { TAT } from "./districts/TAT.ts"
import { VCR } from "./districts/VCR.ts"
import { VLE } from "./districts/VLE.ts"
import { VMT } from "./districts/VMT.ts"
import { API } from "./districts/API.ts"
import { BFU } from "./districts/BFU.ts"
import { BUT } from "./districts/BUT.ts"
import { CAR } from "./districts/CAR.ts"
import { CLD } from "./districts/CLD.ts"
import { CON } from "./districts/CON.ts"
import { CVE } from "./districts/CVE.ts"
import { GUA } from "./districts/GUA.ts"
import { IPI } from "./districts/IPI.ts"
import { JAG } from "./districts/JAG.ts"
import { JDH } from "./districts/JDH.ts"
import { LAJ } from "./districts/LAJ.ts"
import { MAN } from "./districts/MAN.ts"
import { MOR } from "./districts/MOR.ts"
import { PIR } from "./districts/PIR.ts"
import { PRD } from "./districts/PRD.ts"
import { RPE } from "./districts/RPE.ts"
import { SAP } from "./districts/SAP.ts"
import { SEE } from "./districts/SEE.ts"
import { SOC } from "./districts/SOC.ts"
import { TRE } from "./districts/TRE.ts"
import { VFO } from "./districts/VFO.ts"
import { VMD } from "./districts/VMD.ts"
import { VPR } from "./districts/VPR.ts"
import { ARA } from "./districts/ARA.ts"
import { BRE } from "./districts/BRE.ts"
import { BVI } from "./districts/BVI.ts"
import { CBE } from "./districts/CBE.ts"
import { CLM } from "./districts/CLM.ts"
import { CRE } from "./districts/CRE.ts"
import { ERM } from "./districts/ERM.ts"
import { IBI } from "./districts/IBI.ts"
import { ITQ } from "./districts/ITQ.ts"
import { JAR } from "./districts/JAR.ts"
import { JDP } from "./districts/JDP.ts"
import { LAP } from "./districts/LAP.ts"
import { MAR } from "./districts/MAR.ts"
import { PDR } from "./districts/PDR.ts"
import { PLH } from "./districts/PLH.ts"
import { PRI } from "./districts/PRI.ts"
import { RTA } from "./districts/RTA.ts"
import { SAU } from "./districts/SAU.ts"
import { SLU } from "./districts/SLU.ts"
import { SRA } from "./districts/SRA.ts"
import { TUC } from "./districts/TUC.ts"
import { VGL } from "./districts/VGL.ts"
import { VMN } from "./districts/VMN.ts"
import { VSO } from "./districts/VSO.ts"



export const DistrictOptions: {key:string,value:string}[] = [
    {key:'ALL_DISTRICTS', value: 'ALL DISTRICTS'},
    {key:AAL.districtAbv, value:AAL.districtName},
    {key:ARI.districtAbv, value:ARI.districtName},
    {key:BRL.districtAbv, value:BRL.districtName},
    {key:CAC.districtAbv, value:CAC.districtName},
    {key:CDU.districtAbv, value:CDU.districtName},
    {key:CMB.districtAbv, value:CMB.districtName},
    {key:CTI.districtAbv, value:CTI.districtName},
    {key:FRE.districtAbv, value:FRE.districtName},
    {key:IGU.districtAbv, value:IGU.districtName},
    {key:JAB.districtAbv, value:JAB.districtName},
    {key:JBO.districtAbv, value:JBO.districtName},
    {key:JDS.districtAbv, value:JDS.districtName},
    {key:LIB.districtAbv, value:LIB.districtName},
    {key:MOE.districtAbv, value:MOE.districtName},
    {key:PEN.districtAbv, value:PEN.districtName},
    {key:PQC.districtAbv, value:PQC.districtName},
    {key:PRS.districtAbv, value:PRS.districtName},
    {key:SAC.districtAbv, value:SAC.districtName},
    {key:SCE.districtAbv, value:SCE.districtName},
    {key:SMI.districtAbv, value:SMI.districtName},
    {key:STN.districtAbv, value:STN.districtName},
    {key:VAN.districtAbv, value:VAN.districtName},
    {key:VJA.districtAbv, value:VJA.districtName},
    {key:VMR.districtAbv, value:VMR.districtName},
    {key:ANH.districtAbv, value:ANH.districtName},
    {key:BEL.districtAbv, value:BEL.districtName},
    {key:BRS.districtAbv, value:BRS.districtName},
    {key:CAD.districtAbv, value:CAD.districtName},
    {key:CGR.districtAbv, value:CGR.districtName},
    {key:CNG.districtAbv, value:CNG.districtName},
    {key:CUR.districtAbv, value:CUR.districtName},
    {key:GRA.districtAbv, value:GRA.districtName},
    {key:IPA.districtAbv, value:IPA.districtName},
    {key:JAC.districtAbv, value:JAC.districtName},
    {key:JDA.districtAbv, value:JDA.districtName},
    {key:JRE.districtAbv, value:JRE.districtName},
    {key:LIM.districtAbv, value:LIM.districtName},
    {key:MOO.districtAbv, value:MOO.districtName},
    {key:PIN.districtAbv, value:PIN.districtName},
    {key:PRA.districtAbv, value:PRA.districtName},
    {key:REP.districtAbv, value:REP.districtName},
    {key:SAM.districtAbv, value:SAM.districtName},
    {key:SDO.districtAbv, value:SDO.districtName},
    {key:SMT.districtAbv, value:SMT.districtName},
    {key:TAT.districtAbv, value:TAT.districtName},
    {key:VCR.districtAbv, value:VCR.districtName},
    {key:VLE.districtAbv, value:VLE.districtName},
    {key:VMT.districtAbv, value:VMT.districtName},
    {key:API.districtAbv, value:API.districtName},
    {key:BFU.districtAbv, value:BFU.districtName},
    {key:BUT.districtAbv, value:BUT.districtName},
    {key:CAR.districtAbv, value:CAR.districtName},
    {key:CLD.districtAbv, value:CLD.districtName},
    {key:CON.districtAbv, value:CON.districtName},
    {key:CVE.districtAbv, value:CVE.districtName},
    {key:GUA.districtAbv, value:GUA.districtName},
    {key:IPI.districtAbv, value:IPI.districtName},
    {key:JAG.districtAbv, value:JAG.districtName},
    {key:JDH.districtAbv, value:JDH.districtName},
    {key:LAJ.districtAbv, value:LAJ.districtName},
    {key:MAN.districtAbv, value:MAN.districtName},
    {key:MOR.districtAbv, value:MOR.districtName},
    {key:PIR.districtAbv, value:PIR.districtName},
    {key:PRD.districtAbv, value:PRD.districtName},
    {key:RPE.districtAbv, value:RPE.districtName},
    {key:SAP.districtAbv, value:SAP.districtName},
    {key:SEE.districtAbv, value:SEE.districtName},
    {key:SOC.districtAbv, value:SOC.districtName},
    {key:TRE.districtAbv, value:TRE.districtName},
    {key:VFO.districtAbv, value:VFO.districtName},
    {key:VMD.districtAbv, value:VMD.districtName},
    {key:VPR.districtAbv, value:VPR.districtName},
    {key:ARA.districtAbv, value:ARA.districtName},
    {key:BRE.districtAbv, value:BRE.districtName},
    {key:BVI.districtAbv, value:BVI.districtName},
    {key:CBE.districtAbv, value:CBE.districtName},
    {key:CLM.districtAbv, value:CLM.districtName},
    {key:CRE.districtAbv, value:CRE.districtName},
    {key:ERM.districtAbv, value:ERM.districtName},
    {key:IBI.districtAbv, value:IBI.districtName},
    {key:ITQ.districtAbv, value:ITQ.districtName},
    {key:JAR.districtAbv, value:JAR.districtName},
    {key:JDP.districtAbv, value:JDP.districtName},
    {key:LAP.districtAbv, value:LAP.districtName},
    {key:MAR.districtAbv, value:MAR.districtName},
    {key:PDR.districtAbv, value:PDR.districtName},
    {key:PLH.districtAbv, value:PLH.districtName},
    {key:PRI.districtAbv, value:PRI.districtName},
    {key:RTA.districtAbv, value:RTA.districtName},
    {key:SAU.districtAbv, value:SAU.districtName},
    {key:SLU.districtAbv, value:SLU.districtName},
    {key:SRA.districtAbv, value:SRA.districtName},
    {key:TUC.districtAbv, value:TUC.districtName},
    {key:VGL.districtAbv, value:VGL.districtName},
    {key:VMN.districtAbv, value:VMN.districtName},
    {key:VSO.districtAbv, value:VSO.districtName},
    ]