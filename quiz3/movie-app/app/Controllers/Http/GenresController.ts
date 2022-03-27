import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";

export default class GenresController {
  public async index({ request, response }: HttpContextContract) {
    if (request.qs().name) {
      const genreName = await Database.from("genres").where(
        "name",
        request.qs().name
      );
      response.ok({ message: "success", data: genreName });
    } else {
      const genres = await Database.from("genres").select("*");
      response.ok({ message: "success", data: genres });
    }
  }
}
