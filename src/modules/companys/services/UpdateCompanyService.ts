import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Company from "../typeorm/entities/Companys";
import { CompanyRepository } from "../typeorm/repositories/CompanyRepository";

interface IRequest {
    id: string;
    name: string;
    cnpj: string;
    address: string;
}

class UpdateCompanyService {
    public async execute({id, name, cnpj, address}: IRequest): Promise<Company>{
       const companysRepository = getCustomRepository(CompanyRepository);
      
       const company = await companysRepository.findOne(id);

       if(!company){
        throw new AppError('Nenhuma empresa foi encontrada!')
       }

       const companysExists = await companysRepository.findByName(name);

       if(companysExists && name !== company.name){
           throw new AppError('Já existe em nossa base de dados uma empresa com esse nome!')
       }

        company.name = name;
        company.cnpj = cnpj;
        company.address = address;

        await companysRepository.save(company);

       return company;
    }
}

export default UpdateCompanyService;