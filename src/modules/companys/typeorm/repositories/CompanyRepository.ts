import { EntityRepository, Repository } from "typeorm";
import Company from "../entities/Companys";

@EntityRepository(Company)
export class CompanyRepository extends Repository<Company>{
    public async findByName(name: string): Promise<Company | undefined>{
        const company = this.findOne({
            where: {
                name,
            },
        });
        
        return company;
    }
}