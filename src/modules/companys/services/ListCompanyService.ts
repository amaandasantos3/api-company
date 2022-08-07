import { getCustomRepository } from "typeorm";
import Company from "../typeorm/entities/Companys";
import { CompanyRepository } from "../typeorm/repositories/CompanyRepository";

class ListCompanyService {
    public async execute(): Promise<Company[]>{
       const companysRepository = getCustomRepository(CompanyRepository);

       const companys = companysRepository.find();

       return companys;
    }
}

export default ListCompanyService;