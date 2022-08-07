import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Company from "../typeorm/entities/Companys";
import { CompanyRepository } from "../typeorm/repositories/CompanyRepository";

interface IRequest {
    name: string;
    cnpj: string;
    address: string;
}

class CreateCompanyService {
    public async execute({name, cnpj, address}: IRequest): Promise<Company>{
       const companysRepository = getCustomRepository(CompanyRepository);
       const companysExists = await companysRepository.findByName(name);

       if(companysExists){
           throw new AppError('Já existe em nossa base de dados uma empresa com esse nome!')
       }

       const company = companysRepository.create({
        name,
        cnpj,
        address,
       });

       await companysRepository.save(company);

       return company;
    }
}

export default CreateCompanyService;