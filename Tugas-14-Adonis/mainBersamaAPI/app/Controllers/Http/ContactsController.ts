import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";

export default class ContactsController {
  public async index({ request, response, params }: HttpContextContract) {
    let name = request.qs().name;

    response.status(200).json({ name, b: params.b });
  }

  public async store({ request }: HttpContextContract) {
    const contactSchema = schema.create({
      name: schema.string({}, [rules.alpha(), rules.minLength(5)]),
      email: schema.string({}, [rules.email()]),
    });
    const payload = await request.validate({ schema: contactSchema });
  }
}
