<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class BuffetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('buffets')->insert([
            'name' => 'Churrasco',
            // 'code' => 'barbecue',
            'description' => '- Arroz branco ou Arroz a Grega
            - Saladas de folhas e legumes (Alface, rúcula, salada bicolor, brócolis, couve-flor, tomate, vinagrete, maionese de legumes e molhos variados).
            - Carnes (Alcatra, Sobrecoxa, Asinha de Frango, Linguiça Toscana e Panceta);
            - Acompanhamento (Farofa com Calabresa)
            - Sobremesa (Bolo com Sorvete)
            - Encerramento (Mesa de Café, Petit Fours)',
            'price' => 101,
            'plates' => json_encode(array(
                array(
                    'name' => 'Lasanha',
                    'description' => 'Massa com recheio dentro',
                    'price' => 50.5,
                    'qtd_per_ten_people' => 3,
                    'ingredients' => array(
                        array(
                            'name' => 'tomate',
                            'description' => null,
                            'quantity' => 5,
                            'price' => 20.50,
                        ),
                        array(
                            'name' => 'abacaxi',
                            'description' => null,
                            'quantity' => 3,
                            'price' => 32,
                        ),
                    )
                ),
                array(
                    'name' => 'Lasanha',
                    'description' => 'Massa com recheio dentro',
                    'price' => 50.5,
                    'qtd_per_ten_people' => 3,
                    'ingredients' => array(
                        array(
                            'name' => 'tomate',
                            'description' => null,
                            'quantity' => 5,
                            'price' => 20.50,
                        ),
                        array(
                            'name' => 'abacaxi',
                            'description' => null,
                            'quantity' => 3,
                            'price' => 32,
                        ),
                    )
                ),
            )),
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s') 
        ]);

        DB::table('buffets')->insert([
            'name' => 'Jantar',
            // 'code' => 'dinner',
            'description' => '- Saladas de folhas e legumes (Alface, rúcula, salada bicolor, brócolis, couve-flor, tomate, vinagrete, maionese de legumes e molhos variados);
            - Ravioli Quatro queijos ao molho (sugo ou rosê);
            - Arroz Branco;
            - Batatinhas ao molho pesto;
            - Filé de frango com creme de milho;
            - Filé de frango ao molho de maracujá ou laranja;
            - Sobremesa (Bolo com Sorvete);
            - Encerramento (Mesa de Café, Petit Fours)',
            'price' => 0,
            'plates' => json_encode(array()),
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s') 
        ]);

        DB::table('buffets')->insert([
            'name' => 'Finger Food',
            // 'code' => 'finger_food',
            'description' => '- Saladas de folhas e legumes (Alface, rúcula, salada bicolor, brócolis, couve-flor, tomate, vinagrete, maionese de legumes e molhos variados);
            - Mini Polentinha com ragu de linguiça
            - Mini Batata Bolinha com bacon e catupiry
            - Frango com creme de Milho
            - Massa (Ravioli 4 queijos com molho (Rosê ou Sugo))
            - Sobremesa (Bolo com Sorvete);
            - Encerramento (Mesa de Café, Petit Fours)',
            'price' => 0,
            'plates' => json_encode(array()),
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s') 
        ]);

        DB::table('buffets')->insert([
            'name' => 'Comida de Boteco',
            // 'code' => 'bar_food',
            'description' => '- Arroz Branco
            - Saladas de folhas e legumes (Alface, rúcula, salada bicolor, brócolis, couve-flor, tomate, vinagrete, maionese de legumes e molhos variados);
            - Batata Frita
            - Calabresa Acebolada
            - Frango a Passarinho
            - Torresmo
            - Polenta Frita
            - Farofa com Bacon
            - Sobremesa (Bolo com Sorvete);
            - Encerramento (Mesa de Café, Petit Fours)',
            'price' => 0,
            'plates' => json_encode(array()),
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s') 
        ]);

        DB::table('buffets')->insert([
            'name' => 'Coquetel',
            // 'code' => 'cocktail',
            'description' => 'Mini-Salgados:
            - Fritos: coxinha, maravilha de queijo, croquete de carne, crespinho de milho, croquete de calabresa, mini quibe, Risoles ( pizza, palmito, calabresa com catupiry) 
            - Assados : Esfiha de carne ou frango, trouxinha de calabresa ,enroladinho de salsicha, empada (frango e palmito)
            - Mini Hambúrguer, Mini Cachorro-quente e batata frita
            
            Massa:
            - Raviolli de 4 queijos com molho sugo
            
            Sobremesa:
            - Bolo com sorvete
            
            Encerramento:
            - Mesa de café 
            - Petit fours ',
            'price' => 0,
            'plates' => json_encode(array()),
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s') 
        ]);
    }
}
