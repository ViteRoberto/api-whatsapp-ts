import { image as imageQr } from "qr-image";
import LeadExternal from "../../domain/lead-external.repository";
import { create, Whatsapp } from "venom-bot";

export class VenomTransporter implements LeadExternal {
  intance: Whatsapp | undefined;

  constructor() {
    create({ session: "session" }).then((client) => (this.intance = client));
  }
  sendMsg(lead: { message: string; phone: string }): Promise<any> {
    try {
      const { message, phone } = lead;
      const postImage = "https://firebasestorage.googleapis.com/v0/b/mis-xvs.appspot.com/o/envioPaula.png?alt=media&token=99c3d94d-65e5-40ae-a6ea-59f32c198709";
      const response = this.intance?.sendImage(`${phone}@c.us`,postImage,undefined,message);
      // const response = this.intance?.sendText(`${phone}@c.us`, message);
      return Promise.resolve(response);
    } catch (error: any) {
      return Promise.reject(error);
    }
  }
}
