<?php
namespace App\Controller\Tests;

use App\Entity\TranslatableString;
use App\Repository\CategoryRepository;
use App\Repository\SubCategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Ce controller sert à ajouter les alt aux catégories
 */
class CategoryAltController extends AbstractController
{
    public function __construct(
        private CategoryRepository $categoryRepository,
        private SubCategoryRepository $subCategoryRepository,
        private EntityManagerInterface $em
    )
    {
        
    }

    #[Route('/categoryAlt/configure', name: 'categoryAlt_configure')]
    public function configure(): JsonResponse
    {
        foreach($this->categoryRepository->findAll() as $category)
        {
            switch($category->getPicture())
            {
                case 'bar.jpg':
                    $category->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Bar tools for preparing cocktails')
                            ->setFr('Ustensiles de bar pour préparer des cocktails')
                            ->setEs('Herramientas de bar para preparar cócteles')
                            ->setIt('Strumenti da bar per preparare cocktail')
                    );
                    break;
                case 'art_table.jpg':
                    $category->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Various cocktails served in balloon glasses, a margarita glass, a martini glass, and tumbler glasses')
                            ->setFr('Nombreux cocktails servis dans des verres à ballon, un verre à margarita, un verre à martini et des verres tumbler')
                            ->setEs('Varios cócteles servidos en copas de globo, una copa margarita, una copa martini y vasos tumbler')
                            ->setIt('Vari cocktail serviti in bicchieri a palloncino, un bicchiere da margarita, un bicchiere da martini e bicchieri tumbler')
                    );
                    break;
                case 'electro.jpg':
                    //réparation d une faute d orthographe
                    $category->getSlug()->setEs('pequeno-electrodomestico');
                    $category->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('A blender and 2 cocktails placed in a kitchen')
                            ->setFr('Un blender et 2 cocktails posés dans une cuisine')
                            ->setEs('Una licuadora y 2 cócteles colocados en una cocina')
                            ->setIt('Un frullatore e 2 cocktail posizionati in una cucina')
                    );
                    break;
                case 'soft_juices.jpg':
                    $category->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Aligned glasses of smoothie and fruit juice')
                            ->setFr('Verres de smoothie jus de fruit alignés')
                            ->setEs('Vasos alineados de batido y jugo de frutas')
                            ->setIt('Bicchieri allineati di smoothie e succo di frutta')
                    );
                    break;
                case 'aromatisation.jpg':
                    $category->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('A lavender field')
                            ->setFr('Un champ de lavande')
                            ->setEs('Un campo de lavanda')
                            ->setIt('Un campo di lavanda')
                    );
                    break;
                case 'spirituals.jpg':
                    //réparation de la faute d orthographe
                    $category->getSlug()->setEn('spirits');
                    $category->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Aligned bottles of spirits')
                            ->setFr('Bouteilles de spiritueux alignées')
                            ->setEs('Botellas alineadas de licores')
                            ->setIt('Bottiglie allineate di liquori')
                    );
                    break;
                case 'snacking_dipping.jpg':
                    $category->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('5 people having a snack dinner at a table')
                            ->setFr('5 personnes qui prennent un apéritif dinatoire sur une table')
                            ->setEs('5 personas cenando aperitivos en una mesa')
                            ->setIt('5 persone che fanno un aperitivo su un tavolo')
                    );
                    break;
                case 'recipes.jpg':
                    $category->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('A bartender making a cocktail recipe')
                            ->setFr('Un barman réalise une recette de cocktail')
                            ->setEs('Un barman preparando una receta de cóctel')
                            ->setIt('Un barista che prepara una ricetta di cocktail')
                    );
                    break;
                case 'gazette.jpg':
                    $category->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Header of a vintage newspaper')
                            ->setFr('Entête d\'un journal vintage')
                            ->setEs('Encabezado de un periódico vintage')
                            ->setIt('Intestazione di un giornale d\'epoca')
                    );
                    break;
            }
        }

        foreach($this->subCategoryRepository->findAll() as $subCategory)
        {
            switch($subCategory->getPicture())
            {
                case 'shakers.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('A shaker for mixing cocktail ingredients')
                            ->setFr('Un shaker pour mélanger les ingrédients des cocktails')
                            ->setEs('Un agitador para mezclar los ingredientes de los cócteles')
                            ->setIt('Uno shaker per mescolare gli ingredienti dei cocktail')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('A shaker for mixing cocktail ingredients')
                            ->setFr('Un shaker pour mélanger les ingrédients des cocktails')
                            ->setEs('Un agitador para mezclar los ingredientes de los cócteles')
                            ->setIt('Uno shaker per mescolare gli ingredienti dei cocktail')
                    );
                    break;
                case 'dash_bottle.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Bartender pouring liquid onto a cocktail using a Dash bottle')
                            ->setFr('Barman qui verse du liquide sur un cocktail à l\'aide d\'une Dash bottle')
                            ->setEs('Bartender vertiendo líquido sobre un cóctel con una botella Dash')
                            ->setIt('Barman che versa liquido su un cocktail usando una bottiglia Dash')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Bartender pouring liquid onto a cocktail using a Dash bottle')
                            ->setFr('Barman qui verse du liquide sur un cocktail à l\'aide d\'une Dash bottle')
                            ->setEs('Bartender vertiendo líquido sobre un cóctel con una botella Dash')
                            ->setIt('Barman che versa liquido su un cocktail usando una bottiglia Dash')
                    );
                    break;
                case 'siphons.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Siphon releasing a gaseous liquid into a cocktail')
                            ->setFr('Siphon déversant un liquide gazeux dans un cocktail')
                            ->setEs('Sifón liberando un líquido gaseoso en un cóctel')
                            ->setIt('Sifone che rilascia un liquido gassoso in un cocktail')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Siphon releasing a gaseous liquid into a cocktail')
                            ->setFr('Siphon déversant un liquide gazeux dans un cocktail')
                            ->setEs('Sifón liberando un líquido gaseoso en un cóctel')
                            ->setIt('Sifone che rilascia un liquido gassoso in un cocktail')
                    );
                    break;
                case 'strainers.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('A bartender uses a strainer to pour filtered liquid into a cocktail glass')
                            ->setFr('Un barman utilise un strainer pour verser un liquide filtré dans un verre à cocktail')
                            ->setEs('Un barman usa un colador para verter líquido filtrado en una copa de cóctel')
                            ->setIt('Un barman usa uno strainer per versare liquido filtrato in un bicchiere da cocktail')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('A strainer placed in front of a shaker')
                            ->setFr('Strainer posé devant un shaker')
                            ->setEs('Colador colocado frente a una coctelera')
                            ->setIt('Uno strainer posato davanti a uno shaker')
                    );
                    break;
                case 'cut.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('A man grates the skin of a lemon')
                            ->setFr('Un homme râpe la peau d\'un citron')
                            ->setEs('Un hombre rallando la piel de un limón')
                            ->setIt('Un uomo gratta la buccia di un limone')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('A man grates the skin of a lemon')
                            ->setFr('Un homme râpe la peau d\'un citron')
                            ->setEs('Un hombre rallando la piel de un limón')
                            ->setIt('Un uomo gratta la buccia di un limone')
                    );
                    break;
                case 'bar_diverse.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('A shaker, strainers, a strainer, and a jigger')
                            ->setFr('Un shaker, des passoires, un strainer et un jigger')
                            ->setEs('Un agitador, coladores, un colador y un jigger')
                            ->setIt('Uno shaker, colatori, uno strainer e un jigger')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('A jigger, a strainer, and a long bar spoon')
                            ->setFr('Un jigger, un strainer et une longue cuillère de bar')
                            ->setEs('Un jigger, un colador y una cuchara larga de bar')
                            ->setIt('Un jigger, uno strainer e un lungo cucchiaino da bar')
                    );
                    break;
                case 'bar_deco.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('A straw and a decorative umbrella planted in a half-orange')
                            ->setFr('Une paille et un parasol décoratif plantés dans une demi-orange')
                            ->setEs('Una pajita y una sombrilla decorativa plantadas en medio de una naranja')
                            ->setIt('Una cannuccia e un ombrellino decorativo piantati in mezzo a un mezzo arancia')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('A straw and a decorative umbrella planted in a half-orange')
                            ->setFr('Une paille et un parasol décoratif plantés dans une demi-orange')
                            ->setEs('Una pajita y una sombrilla decorativa plantadas en medio de una naranja')
                            ->setIt('Una cannuccia e un ombrellino decorativo piantati in mezzo a un mezzo arancia')
                    );
                    break;
                case 'wine_glass.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Wine glasses and a champagne flute')
                            ->setFr('Des verres de vin et une flûte de champagne')
                            ->setEs('Copas de vino y una copa de champán')
                            ->setIt('Calici da vino e una flûte di champagne')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('A glass of red wine and a champagne flute')
                            ->setFr('Un verre de vin rouge et une flûte de champagne')
                            ->setEs('Una copa de vino tinto y una copa de champán')
                            ->setIt('Un bicchiere di vino rosso e una flûte di champagne')
                    );
                    break;
                case 'tumbler.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Cocktail served in a tumbler glass')
                            ->setFr('Cocktail servi dans un verre tumbler')
                            ->setEs('Cóctel servido en un vaso tumbler')
                            ->setIt('Cocktail servito in un bicchiere tumbler')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('A tumbler glass')
                            ->setFr('Un verre tumbler')
                            ->setEs('Un vaso tumbler')
                            ->setIt('Un bicchiere tumbler')
                    );
                    break;
                case 'martini_glasses.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Cocktail served in a martini glass')
                            ->setFr('Cocktail servi dans un verre à martini')
                            ->setEs('Cóctel servido en una copa de martini')
                            ->setIt('Cocktail servito in un bicchiere martini')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Cocktail served in a martini glass')
                            ->setFr('Cocktail servi dans un verre à martini')
                            ->setEs('Cóctel servido en una copa de martini')
                            ->setIt('Cocktail servito in un bicchiere martini')
                    );
                    break;
                case 'old_fashioned.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('2 old-fashioned whiskey glasses on a bar')
                            ->setFr('2 verres à whisky old fashioned posés sur un bar')
                            ->setEs('2 vasos de whisky old fashioned en una barra')
                            ->setIt('2 bicchieri di whisky old fashioned su un bancone')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('An old-fashioned whiskey glass')
                            ->setFr('Verre à whisky old fashioned')
                            ->setEs('Un vaso de whisky old fashioned')
                            ->setIt('Un bicchiere di whisky old fashioned')
                    );
                    break;
                case 'tulipe.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Piña colada served in a tulip glass')
                            ->setFr('Piña colada servie dans un verre à tulipe')
                            ->setEs('Piña colada servida en una copa tulipa')
                            ->setIt('Piña colada servita in un bicchiere a tulipano')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Piña colada served in a tulip glass')
                            ->setFr('Piña colada servie dans un verre à tulipe')
                            ->setEs('Piña colada servida en una copa tulipa')
                            ->setIt('Piña colada servita in un bicchiere a tulipano')
                    );
                    break;
                case 'shooters.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Alcohol poured into shooter glasses')
                            ->setFr('Alcool versé dans des verres à shooters')
                            ->setEs('Alcohol vertido en vasos de chupito')
                            ->setIt('Alcol versato in bicchieri shooter')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('A shooter glass')
                            ->setFr('Un verre à shooter')
                            ->setEs('Un vaso de chupito')
                            ->setIt('Un bicchiere shooter')
                    );
                    break;
                case 'margarita_glasses.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('2 cocktails in margarita glasses')
                            ->setFr('2 cocktails dans des verres à margarita')
                            ->setEs('2 cócteles en vasos margarita')
                            ->setIt('2 cocktail in bicchieri margarita')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('A cocktail in a margarita glass')
                            ->setFr('Un cocktail dans un verre à margarita')
                            ->setEs('Un cóctel en un vaso margarita')
                            ->setIt('Un cocktail in un bicchiere margarita')
                    );
                    break;
                case 'highball_glasses.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Highball glasses for sangria')
                            ->setFr('Des verres à ballon de sangria')
                            ->setEs('Vasos altos para sangría')
                            ->setIt('Bicchieri alti per sangria')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('A long highball glass')
                            ->setFr('Un long verre à ballon de sangria')
                            ->setEs('Un vaso alto largo para sangría')
                            ->setIt('Un bicchiere alto lungo per sangria')
                    );
                    break;
                case 'other_glasses.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('A couple toasting with 2 uniquely designed glasses')
                            ->setFr('Un couple trinque avec 2 verres au design original')
                            ->setEs('Una pareja brindando con 2 vasos de diseño único')
                            ->setIt('Una coppia brinda con 2 bicchieri dal design unico')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('A uniquely designed glass')
                            ->setFr('Un verre au design original')
                            ->setEs('Un vaso de diseño único')
                            ->setIt('Un bicchiere dal design unico')
                    );
                    break;
                case 'service_plate.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Appetizer buffet arranged in modern-designed plates')
                            ->setFr('Buffet apéritif disposé dans des plats au design moderne')
                            ->setEs('Buffet de aperitivos dispuesto en platos de diseño moderno')
                            ->setIt('Buffet di antipasti disposto in piatti dal design moderno')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Plate with verrines, appetizer spoons, and small plates')
                            ->setFr('Plateau avec verrines, cuillères apéritives et petites assiettes')
                            ->setEs('Plato con verrines, cucharitas de aperitivo y platos pequeños')
                            ->setIt('Piatto con verrine, cucchiai da aperitivo e piatti piccoli')
                    );
                    break;
                case 'blender.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('A blender and fruits in a kitchen')
                            ->setFr('Un blender et des fruits dans une cuisine')
                            ->setEs('Una licuadora y frutas en una cocina')
                            ->setIt('Un frullatore e frutta in cucina')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('A blender')
                            ->setFr('Un blender')
                            ->setEs('Una licuadora')
                            ->setIt('Un frullatore')
                    );
                    break;
                case 'dehydrator.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Dehydrator filled with slices of fruits')
                            ->setFr('Déshydrateur rempli de tranches de fruits')
                            ->setEs('Desecador lleno de rodajas de frutas')
                            ->setIt('Disidratatore pieno di fette di frutta')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Dehydrator filled with slices of fruits')
                            ->setFr('Déshydrateur rempli de tranches de fruits')
                            ->setEs('Desecador lleno de rodajas de frutas')
                            ->setIt('Disidratatore pieno di fette di frutta')
                    );
                    break;
                case 'ice_machine.jpg':
                    $subCategory->getName()->setEn('Crushed ice machine'); // CORRIGE LA FAUTE D ORTHOGRAPHE 
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Spread crushed ice')
                            ->setFr('De la glace pilée étalée')
                            ->setEs('Esparcir hielo triturado')
                            ->setIt('Spargere ghiaccio tritato')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Crushed ice machine and orange juice')
                            ->setFr('Une machine à glace pilée et du jus d\'orange')
                            ->setEs('Máquina de hielo triturado y jugo de naranja')
                            ->setIt('Macchina di ghiaccio tritato e succo d\'arancia')
                    );
                    break;
                case 'smoke_guns.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Bartender creating a bubble on a cocktail using a smoke gun')
                            ->setFr('Un barman fait une bulle sur un cocktail à grâce à un smoke gun')
                            ->setEs('Bartender creando una burbuja en un cóctel con una pistola de humo')
                            ->setIt('Barista che crea una bolla su un cocktail usando una pistola per fumo')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Smoke gun for cocktails')
                            ->setFr('Un smoke gun pour cocktails')
                            ->setEs('Pistola de humo para cócteles')
                            ->setIt('Pistola per fumo per cocktail')
                    );
                    break;
                case 'smokers.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Two cocktails releasing smoke')
                            ->setFr('Deux cocktails laissant échapper de la fumée')
                            ->setEs('Dos cócteles liberando humo')
                            ->setIt('Due cocktail che rilasciano fumo')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Cocktail smoker')
                            ->setFr('Un fumoir pour cocktails')
                            ->setEs('Fumador de cócteles')
                            ->setIt('Fumatore di cocktail')
                    );
                    break;
                case 'juices_purees.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Assortment of various fruits')
                            ->setFr('Étalage de fruits de toutes sortes')
                            ->setEs('Surtido de varias frutas')
                            ->setIt('Assortimento di vari frutti')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Assortment of various fruits')
                            ->setFr('Étalage de fruits de toutes sortes')
                            ->setEs('Surtido de varias frutas')
                            ->setIt('Assortimento di vari frutti')
                    );
                    break;
                case 'limonade.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('2 glasses of lemonade')
                            ->setFr('2 verres de limonade')
                            ->setEs('2 vasos de limonada')
                            ->setIt('2 bicchieri di limonata')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('A glass of lemonade')
                            ->setFr('Un verre de limonade')
                            ->setEs('Un vaso de limonada')
                            ->setIt('Un bicchiere di limonata')
                    );
                    break;
                case 'tonic.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('4 cocktails with tonic')
                            ->setFr('4 cocktails à base de tonic')
                            ->setEs('4 cócteles con tónica')
                            ->setIt('4 cocktail al tonico')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Cocktail with tonic')
                            ->setFr('Un cocktail à base de tonic')
                            ->setEs('Cóctel con tónica')
                            ->setIt('Cocktail al tonico')
                    );
                    break;
                case 'sodas.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('4 glasses of sodas with different flavors')
                            ->setFr('4 verres de sodas à différents goûts')
                            ->setEs('4 vasos de sodas con diferentes sabores')
                            ->setIt('4 bicchieri di soda con sapori diversi')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Orange slices bathing in orange soda')
                            ->setFr('Tranches d\'orange baignant dans du soda orange')
                            ->setEs('Rodajas de naranja bañadas en refresco de naranja')
                            ->setIt('Fette d\'arancia che si immergono in una soda all\'arancia')
                    );
                    break;
                case 'the_infusions.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Tea cup placed in front of a teapot')
                            ->setFr('Tasse de thé posée devant une théière')
                            ->setEs('Taza de té colocada frente a una tetera')
                            ->setIt('Tazza di tè posta di fronte a una teiera')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Transparent teapot filled with green tea')
                            ->setFr('Théière transparente remplie de thé vert')
                            ->setEs('Tetera transparente llena de té verde')
                            ->setIt('Teiera trasparente riempita di tè verde')
                    );
                    break;
                case 'ginger.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Ginger pieces placed in front of 2 drinks')
                            ->setFr('Morceaux de gingembre posés devant 2 boissons')
                            ->setEs('Trozos de jengibre colocados frente a 2 bebidas')
                            ->setIt('Pezzi di zenzero posti davanti a 2 bevande')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Ginger pieces placed in front of 2 drinks')
                            ->setFr('Morceaux de gingembre posés devant 2 boissons')
                            ->setEs('Trozos de jengibre colocados frente a 2 bebidas')
                            ->setIt('Pezzi di zenzero posti davanti a 2 bevande')
                    );
                    break;
                case 'kombucha.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Kombucha served in large jars')
                            ->setFr('Kombucha servi dans de grands bocaux')
                            ->setEs('Kombucha servido en tarros grandes')
                            ->setIt('Kombucha servita in grandi vasi')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Kombucha served in large jars')
                            ->setFr('Kombucha servi dans de grands bocaux')
                            ->setEs('Kombucha servido en tarros grandes')
                            ->setIt('Kombucha servita in grandi vasi')
                    );
                    break;
                case 'other_drinks.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Several glasses arranged in a kitchen')
                            ->setFr('Plusieurs verres alignés dans une cuisine')
                            ->setEs('Varios vasos dispuestos en una cocina')
                            ->setIt('Diversi bicchieri disposti in cucina')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('2 glasses of sparkling strawberry drink')
                            ->setFr('2 verres d\'une boisson pétillante aux fraises')
                            ->setEs('2 vasos de una bebida espumosa de fresa')
                            ->setIt('2 bicchieri di una bibita frizzante alla fragola')
                    );
                    break;
                case 'aromes.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Bottles of aroma surrounded by roses')
                            ->setFr('Bouteilles d\'arôme entourées de roses')
                            ->setEs('Botellas de aroma rodeadas de rosas')
                            ->setIt('Bottiglie di aroma circondate da rose')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Bottle of aroma surrounded by roses')
                            ->setFr('Bouteille d\'arôme entourée de roses')
                            ->setEs('Botella de aroma rodeada de rosas')
                            ->setIt('Bottiglia di aroma circondata da rose')
                    );
                    break;
                case 'sirups.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Glasses of grenadine syrup')
                            ->setFr('Verres de sirop de grenadine')
                            ->setEs('Vasos de jarabe de granadina')
                            ->setIt('Bicchieri di sciroppo di melagrana')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Bottle of grenadine syrup')
                            ->setFr('Bouteille de sirop de grenadine')
                            ->setEs('Botella de jarabe de granadina')
                            ->setIt('Bottiglia di sciroppo di melagrana')
                    );
                    break;
                case 'spices.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Spoons containing colorful spices')
                            ->setFr('Cuillères contenant des épices colorées')
                            ->setEs('Cucharas con especias de colores')
                            ->setIt('Cucchiai contenenti spezie colorate')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Spoons containing colorful spices')
                            ->setFr('Cuillères contenant des épices colorées')
                            ->setEs('Cucharas con especias de colores')
                            ->setIt('Cucchiai contenenti spezie colorate')
                    );
                    break;
                case 'infusions.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Infuser bags of different colors')
                            ->setFr('Sachets à infuser de différentes couleurs')
                            ->setEs('Bolsitas de infusión de diferentes colores')
                            ->setIt('Sacchetti infusori di diversi colori')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Infuser bags')
                            ->setFr('Sachets à infuser')
                            ->setEs('Bolsitas de infusión')
                            ->setIt('Sacchetti infusori')
                    );
                    break;
                case 'fruits_flowers.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Display of dried fruits')
                            ->setFr('Étalage de fruits séchés')
                            ->setEs('Exhibición de frutas secas')
                            ->setIt('Esposizione di frutta secca')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Display of dried fruits')
                            ->setFr('Étalage de fruits séchés')
                            ->setEs('Exhibición de frutas secas')
                            ->setIt('Esposizione di frutta secca')
                    );
                    break;
                case 'sawdust.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('2 hands immersed in sawdust')
                            ->setFr('2 mains plongées dans de la sciure de bois')
                            ->setEs('2 manos sumergidas en serrín')
                            ->setIt('2 mani immerse nella segatura')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Sawdust')
                            ->setFr('Sciure de bois')
                            ->setEs('Serrín')
                            ->setIt('Segatura')
                    );
                    break;
                case 'whisky.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Glasses of whisky')
                            ->setFr('Verres de whisky')
                            ->setEs('Vasos de whisky')
                            ->setIt('Bicchieri di whisky')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Glass of whisky')
                            ->setFr('Un verre de whisky')
                            ->setEs('Vaso de whisky')
                            ->setIt('Bicchiere di whisky')
                    );
                    break;
                case 'vodka.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Glasses of chilled vodka')
                            ->setFr('Des verres de vodka glacée')
                            ->setEs('Vasos de vodka fría')
                            ->setIt('Bicchieri di vodka ghiacciata')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Glasses of chilled vodka')
                            ->setFr('Des verres de vodka glacée')
                            ->setEs('Vasos de vodka fría')
                            ->setIt('Bicchieri di vodka ghiacciata')
                    );
                    break;
                case 'rhum_cachaca.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Glasses of Cuba Libre')
                            ->setFr('Verres de Cuba Libre')
                            ->setEs('Vasos de Cuba Libre')
                            ->setIt('Bicchieri di Cuba Libre')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Glasses of Cuba Libre')
                            ->setFr('Verres de Cuba Libre')
                            ->setEs('Vasos de Cuba Libre')
                            ->setIt('Bicchieri di Cuba Libre')
                    );
                    break;
                case 'tequila.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Tequila shooters with salt and lemons')
                            ->setFr('Shooters de tequila avec du sel et des citrons')
                            ->setEs('Chupitos de tequila con sal y limones')
                            ->setIt('Shooter di tequila con sale e limoni')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Tequila shooters with salt and lemons')
                            ->setFr('Shooters de tequila avec du sel et des citrons')
                            ->setEs('Chupitos de tequila con sal y limones')
                            ->setIt('Shooter di tequila con sale e limoni')
                    );
                    break;
                case 'cognac_armagnac.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Glasses of cognac in front of a barrel')
                            ->setFr('Verres de cognac devant un tonneau')
                            ->setEs('Vasos de coñac frente a un barril')
                            ->setIt('Bicchieri di cognac davanti a una botte')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Glasses of cognac in front of a barrel')
                            ->setFr('Verres de cognac devant un tonneau')
                            ->setEs('Vasos de coñac frente a un barril')
                            ->setIt('Bicchieri di cognac davanti a una botte')
                    );
                    break;
                case 'liquor_creams.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Glasses of liquor cream on a bed of coffee beans')
                            ->setFr('Verres de crème de liqueur sur un lit de grains de café')
                            ->setEs('Vasos de crema de licor sobre una cama de granos de café')
                            ->setIt('Bicchieri di crema di liquore su un letto di chicchi di caffè')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Glasses of liquor cream on a bed of coffee beans')
                            ->setFr('Verres de crème de liqueur sur un lit de grains de café')
                            ->setEs('Vasos de crema de licor sobre una cama de granos de café')
                            ->setIt('Bicchieri di crema di liquore su un letto di chicchi di caffè')
                    );
                    break;
                case 'bitter.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Shot glass filled with bitter')
                            ->setFr('Verre à shooter rempli de bitter')
                            ->setEs('Chupito lleno de amargo')
                            ->setIt('Bicchiere da shot riempito di amaro')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Shot glass filled with bitter')
                            ->setFr('Verre à shooter rempli de bitter')
                            ->setEs('Chupito lleno de amargo')
                            ->setIt('Bicchiere da shot riempito di amaro')
                    );
                    break;
                case 'other_spirituals.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Bottles of spirits and a glass of whisky')
                            ->setFr('Des bouteilles de spiritueux et un verre de whisky')
                            ->setEs('Botellas de licores y un vaso de whisky')
                            ->setIt('Bottiglie di liquori e un bicchiere di whisky')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Bottle of amber-colored spirit')
                            ->setFr('Une bouteille de spiritueux à la couleur ambrée')
                            ->setEs('Botella de licor de color ámbar')
                            ->setIt('Bottiglia di liquore color ambra')
                    );
                    break;
                case 'pates_rillettes.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Pâté toasts in front of a pâté jar')
                            ->setFr('Toasts de pâté devant un bocal de paté')
                            ->setEs('Tostadas de paté frente a un frasco de paté')
                            ->setIt('Tostadas di paté davanti a un barattolo di paté')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Pâté toasts in front of a pâté jar')
                            ->setFr('Toasts de pâté devant un bocal de paté')
                            ->setEs('Tostadas de paté frente a un frasco de paté')
                            ->setIt('Tostadas di paté davanti a un barattolo di paté')
                    );
                    break;
                case 'houmous.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Chickpea houmous served in a bowl')
                            ->setFr('Houmous aux pois chiches servi dans un bol')
                            ->setEs('Hummus de garbanzos servido en un tazón')
                            ->setIt('Houmous di ceci servito in una ciotola')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Chickpea houmous served in a bowl')
                            ->setFr('Houmous aux pois chiches servi dans un bol')
                            ->setEs('Hummus de garbanzos servido en un tazón')
                            ->setIt('Houmous di ceci servito in una ciotola')
                    );
                    break;
                case 'cream_tartinable.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Spreadable preparation with accompanying toasts')
                            ->setFr('Préparation à tartiner, accompagnée de ses toasts')
                            ->setEs('Preparación untable con tostadas acompañantes')
                            ->setIt('Preparazione spalmabile con tostadas accompagnate')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Spreadable preparation with accompanying toasts')
                            ->setFr('Préparation à tartiner, accompagnée de ses toasts')
                            ->setEs('Preparación untable con tostadas acompañantes')
                            ->setIt('Preparazione spalmabile con tostadas accompagnate')
                    );
                    break;
                case 'chips.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Potato chips with a cream cheese sauce')
                            ->setFr('Des chips de pomme de terre avec une sauce au fromage frais')
                            ->setEs('Papas fritas con salsa de queso crema')
                            ->setIt('Patatine con salsa di formaggio cremoso')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Potato chips with a cream cheese sauce')
                            ->setFr('Des chips de pomme de terre avec une sauce au fromage frais')
                            ->setEs('Papas fritas con salsa de queso crema')
                            ->setIt('Patatine con salsa di formaggio cremoso')
                    );
                    break;
                case 'snacking.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Chips, snack biscuits, and dried fruits arranged on a tray')
                            ->setFr('Chips, biscuits apéritifs et fruits secs disposés sur un plateau')
                            ->setEs('Papas fritas, galletas para picar y frutas secas dispuestas en una bandeja')
                            ->setIt('Patatine, biscotti per spuntini e frutta secca disposti su un vassoio')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Chips, snack biscuits, and dried fruits arranged on a tray')
                            ->setFr('Chips, biscuits apéritifs et fruits secs disposés sur un plateau')
                            ->setEs('Papas fritas, galletas para picar y frutas secas dispuestas en una bandeja')
                            ->setIt('Patatine, biscotti per spuntini e frutta secca disposti su un vassoio')
                    );
                    break;
                case 'charcuterie.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Whole cured ham and stacked sausages')
                            ->setFr('Jambon cru entier et saucissons empilés')
                            ->setEs('Jamón curado entero y salchichas apiladas')
                            ->setIt('Prosciutto crudo intero e salsicce impilate')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Shaved raw ham')
                            ->setFr('Chiffonade de jambon cru')
                            ->setEs('Jamón crudo rallado')
                            ->setIt('Prosciutto crudo affettato')
                    );
                    break;
                case 'classics.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Grapefruit cocktails on a terrace')
                            ->setFr('Cocktails au pamplemousse sur une terrasse')
                            ->setEs('Cócteles de pomelo en una terraza')
                            ->setIt('Cocktail al pompelmo su una terrazza')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Grapefruit cocktails on a terrace')
                            ->setFr('Cocktails au pamplemousse sur une terrasse')
                            ->setEs('Cócteles de pomelo en una terraza')
                            ->setIt('Cocktail al pompelmo su una terrazza')
                    );
                    break;
                case 'trends.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Different colorful cocktails with fruit pieces')
                            ->setFr('Différents cocktails colorés avec des morceaux de fruits')
                            ->setEs('Diferentes cócteles coloridos con trozos de frutas')
                            ->setIt('Diversi cocktail colorati con pezzi di frutta')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Different colorful cocktails with fruit pieces')
                            ->setFr('Différents cocktails colorés avec des morceaux de fruits')
                            ->setEs('Diferentes cócteles coloridos con trozos de frutas')
                            ->setIt('Diversi cocktail colorati con pezzi di frutta')
                    );
                    break;
                case 'rhum_road.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Mojito glasses on the beach at sunset')
                            ->setFr('Verres de mojito sur la plage devant le coucher du soleil')
                            ->setEs('Vasos de mojito en la playa al atardecer')
                            ->setIt('Bicchieri di mojito sulla spiaggia al tramonto')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('A glass and a bottle of rum in front of a barrel')
                            ->setFr('Un verre et une bouteille de rhum devant un tonneau')
                            ->setEs('Un vaso y una botella de ron frente a un barril')
                            ->setIt('Un bicchiere e una bottiglia di rum davanti a una botte')
                    );
                    break;
                case 'around_vodka.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Chilled vodka and lime cocktail')
                            ->setFr('Cocktail glacé à base de vodka et citron vert')
                            ->setEs('Cóctel de vodka fría y lima')
                            ->setIt('Cocktail ghiacciato a base di vodka e lime')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Chilled vodka bottle')
                            ->setFr('Bouteille de vodka glacée')
                            ->setEs('Botella de vodka fría')
                            ->setIt('Bottiglia di vodka ghiacciata')
                    );
                    break;
                case 'gins_world.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Gin cocktails with fruit pieces')
                            ->setFr('Cocktails au gin avec des morceaux de fruits')
                            ->setEs('Cócteles de ginebra con trozos de frutas')
                            ->setIt('Cocktail al gin con pezzi di frutta')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Gin cocktail with herbs and lime')
                            ->setFr('Un cocktail au gin avec des herbes aromatiques et du citron vert')
                            ->setEs('Cóctel de ginebra con hierbas y lima')
                            ->setIt('Cocktail al gin con erbe aromatiche e lime')
                    );
                    break;
                case 'from_whisky.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Glass of whisky with an orange zest')
                            ->setFr('Un verre de whisky avec un zeste d\'orange')
                            ->setEs('Vaso de whisky con ralladura de naranja')
                            ->setIt('Bicchiere di whisky con scorza d\'arancia')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Glass of whisky with an orange zest')
                            ->setFr('Un verre de whisky avec un zeste d\'orange')
                            ->setEs('Vaso de whisky con ralladura de naranja')
                            ->setIt('Bicchiere di whisky con scorza d\'arancia')
                    );
                    break;
                case 'other_cocktails.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Various cocktails with fruit slices')
                            ->setFr('Cocktails variés avec des tranches de fruits')
                            ->setEs('Varios cócteles con rodajas de frutas')
                            ->setIt('Vari cocktail con fette di frutta')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Various cocktails with fruit slices')
                            ->setFr('Cocktails variés avec des tranches de fruits')
                            ->setEs('Varios cócteles con rodajas de frutas')
                            ->setIt('Vari cocktail con fette di frutta')
                    );
                    break;
                case 'mocktails.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Grapefruit mocktail')
                            ->setFr('Un cocktail au pamplemousse')
                            ->setEs('Mocktail de pomelo')
                            ->setIt('Mocktail al pompelmo')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Grapefruit mocktail')
                            ->setFr('Un cocktail au pamplemousse')
                            ->setEs('Mocktail de pomelo')
                            ->setIt('Mocktail al pompelmo')
                    );
                    break;
                case 'infusions_gourmandes.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Infused drinks with fruit pieces')
                            ->setFr('Boissons infusées avec des morceaux de fruits')
                            ->setEs('Bebidas infusionadas con trozos de frutas')
                            ->setIt('Bevande infuse con pezzi di frutta')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Infused drinks with fruit pieces')
                            ->setFr('Boissons infusées avec des morceaux de fruits')
                            ->setEs('Bebidas infusionadas con trozos de frutas')
                            ->setIt('Bevande infuse con pezzi di frutta')
                    );
                    break;
                case 'topic.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Cocktail on a table with bar utensils')
                            ->setFr('Cocktail posé sur une table avec des ustensiles de bar')
                            ->setEs('Cóctel en una mesa con utensilios de bar')
                            ->setIt('Cocktail su un tavolo con utensili da bar')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Cocktail on a table with bar utensils')
                            ->setFr('Cocktail posé sur une table avec des ustensiles de bar')
                            ->setEs('Cóctel en una mesa con utensilios de bar')
                            ->setIt('Cocktail su un tavolo con utensili da bar')
                    );
                    break;
                case 'history.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Gentlemen tasting wine in a 19th-century bar')
                            ->setFr('Messieurs goûtant du vin dans un bar au XIXème siècle')
                            ->setEs('Caballeros degustando vino en un bar del siglo XIX')
                            ->setIt('Signori che assaggiano vino in un bar del XIX secolo')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Gentlemen tasting wine in a 19th-century bar')
                            ->setFr('Messieurs goûtant du vin dans un bar au 19è siècle')
                            ->setEs('Caballeros degustando vino en un bar del siglo XIX')
                            ->setIt('Signori che assaggiano vino in un bar del XIX secolo')
                    );
                    break;
                case 'mixology.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('A cocktail surrounded by refined dishes')
                            ->setFr('Un cocktail entouré de plats raffinés')
                            ->setEs('Un cóctel rodeado de platos refinados')
                            ->setIt('Un cocktail circondato da piatti raffinati')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('A cocktail surrounded by refined dishes')
                            ->setFr('Un cocktail entouré de plats raffinés')
                            ->setEs('Un cóctel rodeado de platos refinados')
                            ->setIt('Un cocktail circondato da piatti raffinati')
                    );
                    break;
                case 'interviews.jpg':
                    $subCategory->setPictureAlt(
                        (new TranslatableString)
                            ->setEn('Bartender preparing a cocktail')
                            ->setFr('Barman préparant un cocktail')
                            ->setEs('Bartender preparando un cóctel')
                            ->setIt('Barman che prepara un cocktail')
                    )
                    ->setSmallPictureAlt(
                        (new TranslatableString)
                            ->setEn('Bartender preparing a cocktail')
                            ->setFr('Barman préparant un cocktail')
                            ->setEs('Bartender preparando un cóctel')
                            ->setIt('Barman che prepara un cocktail')
                    );
                    break;
            }
        }

        $this->em->flush();

        return $this->json('ok');
    }
}
