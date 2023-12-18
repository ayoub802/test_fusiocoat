"use client"

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import React, { Fragment, useState } from 'react'
import BannerImage from "../../../public/partenaire_banner.jpg"
import { Banner } from '@/components/Banner'
import "../../App.css"
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'


function Legal() {



  return (
    <div className='w-full overflow-hidden bg-[#000]'>
    <Header />
    <div className='mt-[88px] lg:mt-[98px]'>
        <Banner image={BannerImage} chemin="Acceuil" title="MENTIONS LÉGALES"/>
                <Fragment >

        <section className='bg-[#fff]'>
            <div className='container'>
                <div className='justify-center max-w-[920px] mx-auto'>
                    <div className='mb-10'>
                        <h5 className='font-bold text__32 mb-3'>DÉFINITIONS</h5>

                        <div className="mb-3">
                            <h5 className='font-bold text__18 mb-2'>Client </h5>
                            <p className='text__16'>
                             tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des présentes conditions générales.
                             Prestations et Services : https://fusiocoat.com/ met à disposition des clients :
                            </p>

                            <ul className='list-disc pl-5 mt-2'>
                                <li>
                                   <h5 className='font-bold text__16 my-2'>Contenu :</h5>
                                   <p>Ensemble des éléments constituants l’information présente sur le site, notamment textes – images – vidéos.</p>
                                </li>
                                <li>
                                   <h5 className='font-bold text__16 my-2'>Informations clients :</h5>
                                   <p>Ci après dénommé « Information (s) » qui correspondent à l’ensemble des données personnelles susceptibles d’être détenues par https://fhe.fr pour la gestion de votre compte, de la gestion de la relation client et à des fins d’analyses et de statistiques.</p>
                                </li>
                                <li>
                                   <h5 className='font-bold text__16 my-2'>Utilisateur :</h5>
                                   <p>Internaute se connectant, utilisant le site susnommé.</p>
                                </li>
                                <li>
                                   <h5 className='font-bold text__16 my-2'>Informations personnelles : </h5>
                                   <p>« Les informations qui permettent, sous quelque forme que ce soit, directement ou non, l’identification des personnes physiques auxquelles elles s’appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978). Les termes « données à caractère personnel », « personne concernée », « sous traitant » et « données sensibles » ont le sens défini par le Règlement Général sur la Protection des Données (RGPD : n° 2016-679).</p>
                                </li>
                            </ul>
                        </div>
                        
                        <h5 className='font-bold text__32 mb-3'>PRÉSENTATION DU SITE INTERNET</h5>

                        <div className="mb-3">
                            <p className='text__16'>
                            En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site internet https://fusiocoat.com/ l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi::
                            </p>

                            <ul className='list-disc pl-5 mt-2'>
                                <li>
                                   <h5 className='font-bold text__16 my-2'>Propriétaire :</h5>
                                   <p>FUSIOCOAT® – Capital social de 8000€</p>
                                </li>
                                <li>
                                   <h5 className='font-bold text__16 my-2'>Siret :</h5>
                                   <p>912 798 758 00013</p>
                                </li>
                                <li>
                                   <h5 className='font-bold text__16 my-2'>Numéro de TVA :</h5>
                                   <p>FR53912798758 – 442 RUE GEORGES BESSE LA STATION PARC SCIENTIFIQUE 30000 NÎMES</p>
                                </li>
                                <li>
                                   <h5 className='font-bold text__16 my-2'>Responsable publication : </h5>
                                   <p>M OUBAHA Mohamed – sales@fusiocoat.comLe responsable publication est une personne physique ou une personne morale.</p>
                                </li>
                                <li>
                                   <h5 className='font-bold text__16 my-2'>Webmaster :  </h5>
                                   <p>M OUBAHA Mohamed – sales@fusiocoat.com</p>
                                </li>
                                <li>
                                   <h5 className='font-bold text__16 my-2'>Conception et réalisation : </h5>
                                   <p>Klyde – 15bis Allée du Commandant Charcot – 44000 Nantes – www.klyde.fr</p>
                                </li>
                                <li>
                                   <h5 className='font-bold text__16 my-2'>Hébergeur :  </h5>
                                   <p>ovh – 2 rue Kellermann 59100 Roubaix 1007</p>
                                </li>
                                <li>
                                   <h5 className='font-bold text__16 my-2'>Délégué à la protection des données :  </h5>
                                   <p>M OUBAHA Mohamed – sales@fusiocoat.com</p>
                                </li>
                            </ul>
                        </div>

                        <h5 className='font-bold text__32 mb-3'>CONDITIONS GÉNÉRALES D’UTILISATION DU SITE ET DES SERVICES PROPOSÉS</h5>
                        <div className="mb-3">
                            <p className='text__16 mb-3'>Le site constitue une œuvre de l’esprit protégée par les dispositions du Code de la Propriété Intellectuelle et des Réglementations Internationales applicables. Le client ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du Site.</p>
                            <p className='text__16 mb-3'>L’utilisation du site https://fusiocoat.com/ implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site https://fusiocoat.com/ sont donc invités à les consulter de manière régulière.</p>
                            <p className='text__16 mb-3'>Ce site internet est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par https://fusiocoat.com/, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention. Le site web https://fusiocoat.com/ est mis à jour régulièrement par https://fusiocoat.com/ responsable. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.</p>
                        </div>


                        <h5 className='font-bold text__32 mb-3'>DESCRIPTION DES SERVICES FOURNIS</h5>
                        <div className="mb-3">
                            <p className='text__16 mb-3'>Le site internet https://fusiocoat.com/ a pour objet de fournir une information concernant l’ensemble des activités de la société. https://fusiocoat.com/ s’efforce de fournir sur le site https://fusiocoat.com/ des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations. Toutes les informations indiquées sur le site https://fusiocoat.com/ sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site https://fusiocoat.com/ ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.</p>
                        </div>



                        <h5 className='font-bold text__32 mb-3'>LIMITATIONS CONTRACTUELLES SUR LES DONNÉES TECHNIQUES</h5>
                        <div className="mb-3">
                            <p className='text__16 mb-3'>Le site utilise la technologie JavaScript. Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour Le site https://fusiocoat.com/ est hébergé chez un prestataire sur le territoire de l’Union Européenne conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD : n° 2016-679)</p>
                            <p className='text__16 mb-3'>L’objectif est d’apporter une prestation qui assure le meilleur taux d’accessibilité. L’hébergeur assure la continuité de son service 24 Heures sur 24, tous les jours de l’année. Il se réserve néanmoins la possibilité d’interrompre le service d’hébergement pour les durées les plus courtes possibles notamment à des fins de maintenance, d’amélioration de ses infrastructures, de défaillance de ses infrastructures ou si les prestations et services génèrent un trafic réputé anormal.</p>
                            <p className='text__16 mb-3'>https://fusiocoat.com/ et l’hébergeur ne pourront être tenus responsables en cas de dysfonctionnement du réseau Internet, des lignes téléphoniques ou du matériel informatique et de téléphonie lié notamment à l’encombrement du réseau empêchant l’accès au serveur.</p>
                        </div>



                        <h5 className='font-bold text__32 mb-3'>FINALITÉ DES DONNÉES COLLECTÉES</h5>
                        <div className="mb-3">
                            <p className='text__16 mb-3'>https://fusiocoat.com/ est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, icônes et sons. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : https://fusiocoat.com/. Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
                            <ul className='list-disc pl-5 mt-2'>
                                <li>
                                   <p>pour permettre la navigation sur le site et la gestion et la traçabilité des prestations et services commandés par l’utilisateur : données de connexion et d’utilisation du Site, facturation, historique des commandes, etc.</p>
                                </li>
                                <li>
                                   <p>pour prévenir et lutter contre la fraude informatique (spamming, hacking…) : matériel informatique utilisé pour la navigation, l’adresse IP, le mot de passe (hashé)</p>
                                </li>
                                <li>
                                   <p>pour améliorer la navigation sur le Site : données de connexion et d’utilisation</p>
                                </li>
                                <li>
                                   <p>pour mener des enquêtes de satisfaction facultatives sur https://fusiocoat.com/ : adresse email</p>
                                </li>
                                <li>
                                   <p>pour mener des campagnes de communication (sms, mail) : numéro de téléphone, adresse email</p>
                                </li>
                            </ul>
                            <p className='text__16 my-3'>https://fusiocoat.com/ ne commercialise pas vos données personnelles qui sont donc uniquement utilisées par nécessité ou à des fins statistiques et d’analyses.</p>
                        </div>


                        <h5 className='font-bold text__32 mb-3'>DROIT D’ACCÈS, DE RECTIFICATION ET D’OPPOSITION</h5>
                        <div className="mb-3">
                            <p className='text__16 mb-3'>Conformément à la réglementation Européenne en vigueur, les utilisateurs de https://fusiocoat.com/ disposent des droits suivants :</p>
                            <ul className='list-disc pl-5 mt-2'>
                                <li>
                                   <p>droit d’accès (article 15 RGPD) et de rectification (article 16 RGPD), de mise à jour, de complétude des données des utilisateurs droit de verrouillage ou d’effacement des données des utilisateurs à caractère personnel (article 17 du RGPD), lorsqu’elles sont inexactes, incomplètes, équivoques, périmées, ou dont la collecte, l’utilisation, la communication ou la conservation est interdite</p>
                                </li>
                                <li>
                                   <p>droit de retirer à tout moment un consentement (article 13-2c RGPD)</p>
                                </li>
                                <li>
                                   <p>droit à la limitation du traitement des données des utilisateurs (article 18 RGPD)</p>
                                </li>
                                <li>
                                   <p>droit d’opposition au traitement des données des utilisateurs (article 21 RGPD)</p>
                                </li>
                                <li>
                                   <p>droit à la portabilité des données que les utilisateurs auront fournies, lorsque ces données font l’objet de traitements automatisés fondés sur leur consentement ou sur un contrat (article 20 RGPD)</p>
                                </li>
                                <li>
                                   <p>droit de définir le sort des données des utilisateurs après leur mort et de choisir à qui https://fusiocoat.com/ devra communiquer (ou non) ses données à un tiers qu’ils aura préalablement désigné.</p>
                                </li>
                            </ul>
                            <p className='text__16 my-3'>Dès que https://fusiocoat.com/ a connaissance du décès d’un Utilisateur et à défaut d’instructions de sa part, https://fusiocoat.com/ s’engage à détruire ses données, sauf si leur conservation s’avère nécessaire à des fins probatoires ou pour répondre à une obligation légale.</p>
                            <p className='text__16 my-3'>Si l’utilisateur souhaite savoir comment https://fusiocoat.com/ utilise ses Données Personnelles, demander à les rectifier ou s’oppose à leur traitement, l’utilisateur peut contacter https://fusiocoat.com/ par écrit à l’adresse suivante:</p>
                            <p className='text__16 my-3'>
                                FUSIOCOAT® – Mohamed Oubaha
                                42 Rue Georges Besse, 30000 Nîmes, France</p>
                            <p className='text__16 my-3'>Dans ce cas, l’utilisateur doit indiquer les Données Personnelles qu’il souhaiterait que https://fusiocoat.com/ corrige, mette à jour ou supprime, en s’identifiant précisément avec une copie d’une pièce d’identité (carte d’identité ou passeport).</p>
                            <p className='text__16 my-3'>Les demandes de suppression de Données Personnelles seront soumises aux obligations qui sont imposées à https://fusiocoat.com/ par la loi, notamment en matière de conservation ou d’archivage des documents. Enfin, les utilisateurs de https://fusiocoat.com/ peuvent déposer une réclamation auprès des autorités de contrôle, et notamment de la CNIL (https://www.cnil.fr/fr/plaintes).</p>
                        </div>


                        <h5 className='font-bold text__32 mb-3'>NON-COMMUNICATION DES DONNÉES PERSONNELLES</h5>
                        <div className="mb-3">
                            <p className='text__16 mb-3'>https://fusiocoat.com/ s’interdit de traiter, héberger ou transférer les Informations collectées sur ses Clients vers un pays situé en dehors de l’Union européenne ou reconnu comme « non adéquat » par la Commission européenne sans en informer préalablement le client. Pour autant, https://fusiocoat.com/ reste libre du choix de ses sous-traitants techniques et commerciaux à la condition qu’il présentent les garanties suffisantes au regard des exigences du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).</p>
                            <p className='text__16 mb-3'>https://fusiocoat.com/ s’engage à prendre toutes les précautions nécessaires afin de préserver la sécurité des Informations et notamment qu’elles ne soient pas communiquées à des personnes non autorisées. Cependant, si un incident impactant l’intégrité ou la confidentialité des Informations du client est portée à la connaissance de https://fusiocoat.com/, celle-ci devra dans les meilleurs délais informer le Client et lui communiquer les mesures de corrections prises. Par ailleurs https://fusiocoat.com/ ne collecte aucune « données sensibles ».</p>
                            <p className='text__16 mb-3'>Les Données Personnelles de l’utilisateur peuvent être traitées par des filiales de https://fusiocoat.com/ et des sous-traitants (prestataires de services), exclusivement afin de réaliser les finalités de la présente politique.</p>
                            <p className='text__16 mb-3'>Dans la limite de leurs attributions respectives et pour les finalités rappelées ci-dessus, les principales personnes susceptibles d’avoir accès aux données des Utilisateurs de https://fusiocoat.com/ sont principalement les agents de notre service client.</p>
                        </div>

                        <h5 className='font-bold text__32 mb-3'>TYPES DE DONNÉES COLLECTÉES</h5>
                        <div className="mb-3">
                            <p className='text__16 mb-3'>Concernant les utilisateurs d’un site https://fusiocoat.com/, nous collectons les données suivantes qui sont indispensables au fonctionnement du service , et qui seront conservées pendant une période maximale de 9 mois mois après la fin de la relation contractuelle: nom, prénom, adresse postale, email, N° de téléphone.</p>
                        </div>


                        <h5 className='font-bold text__32 mb-3'>TYPES DE DONNÉES COLLECTÉES</h5>
                        <div className="mb-3">
                            <p className='text__16 mb-3'>Quels que soient les efforts fournis, aucune méthode de transmission sur Internet et aucune méthode de stockage électronique n’est complètement sûre. Nous ne pouvons en conséquence pas garantir une sécurité absolue. Si nous prenions connaissance d’une brèche de la sécurité, nous avertirions les utilisateurs concernés afin qu’ils puissent prendre les mesures appropriées. Nos procédures de notification d’incident tiennent compte de nos obligations légales, qu’elles se situent au niveau national ou européen. Nous nous engageons à informer pleinement nos clients de toutes les questions relevant de la sécurité de leur compte et à leur fournir toutes les informations nécessaires pour les aider à respecter leurs propres obligations réglementaires en matière de reporting.</p>
                            <p className='text__16 mb-3'>Aucune information personnelle de l’utilisateur du site https://fusiocoat.com/ n’est publiée à l’insu de l’utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l’hypothèse du rachat de https://fusiocoat.com/ et de ses droits permettrait la transmission des dites informations à l’éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l’utilisateur du site https://fusiocoat.com/.</p>
                        </div>



                        <h5 className='font-bold text__32 mb-3'>SÉCURITÉ</h5>
                        <div className="mb-3">
                            <p className='text__16 mb-3'>Pour assurer la sécurité et la confidentialité des Données Personnelles et des Données Personnelles de Santé, https://fusiocoat.com/ utilise des réseaux protégés par des dispositifs standards tels que par pare-feu, la pseudonymisation, l’encryption et mot de passe. Lors du traitement des Données Personnelles, https://fusiocoat.com/ prend toutes les mesures raisonnables visant à les protéger contre toute perte, utilisation détournée, accès non autorisé, divulgation, altération ou destruction.</p>
                        </div>



                        <h5 className='font-bold text__32 mb-3'>LIENS HYPERTEXTES « COOKIES » ET BALISES (“TAGS”) INTERNET</h5>
                        <div className="mb-3">
                            <p className='text__16 mb-3'>Le site https://fusiocoat.com/ contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de https://fusiocoat.com/. Cependant, https://fusiocoat.com/ n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait. Sauf si vous décidez de désactiver les cookies, vous acceptez que le site puisse les utiliser. Vous pouvez à tout moment désactiver ces cookies et ce gratuitement à partir des possibilités de désactivation qui vous sont offertes et rappelées ci-après, sachant que cela peut réduire ou empêcher l’accessibilité à tout ou partie des Services proposés par le site.</p>
                        </div>


                        <h5 className='font-bold text__32 mb-3'>« COOKIES »</h5>
                        <div className="mb-3">
                            <p className='text__16 mb-3'>Un « cookie » est un petit fichier d’information envoyé sur le navigateur de l’Utilisateur et enregistré au sein du terminal de l’Utilisateur (ex : ordinateur, smartphone), (ci-après « Cookies »). Ce fichier comprend des informations telles que le nom de domaine de l’utilisateur, le fournisseur d’accès Internet de l’utilisateur, le système d’exploitation de l’utilisateur, ainsi que la date et l’heure d’accès. Les Cookies ne risquent en aucun cas d’endommager le terminal de l’Utilisateur.</p>
                            <p className='text__16 mb-3'>https://fusiocoat.com/ est susceptible de traiter les informations de l’Utilisateur concernant sa visite du Site, telles que les pages consultées, les recherches effectuées. Ces informations permettent à https://fusiocoat.com/ d’améliorer le contenu du Site, de la navigation de l’Utilisateur.</p>
                            <p className='text__16 mb-3'>Les Cookies facilitant la navigation et/ou la fourniture des services proposés par le Site, l’utilisateur peut configurer son navigateur pour qu’il lui permette de décider s’il souhaite ou non les accepter de manière à ce que des cookies soient enregistrés dans le terminal ou, au contraire, qu’ils soient rejetés, soit systématiquement, soit selon leur émetteur. L’utilisateur peut également configurer son logiciel de navigation de manière à ce que l’acceptation ou le refus des Cookies lui soient proposés ponctuellement, avant qu’un cookie soit susceptible d’être enregistré dans son terminal. https://fusiocoat.com/ informe l’utilisateur que, dans ce cas, il se peut que les fonctionnalités de son logiciel de navigation ne soient pas toutes disponibles.</p>
                            <p className='text__16 mb-3'>Si l’utilisateur refuse l’enregistrement de Cookies dans son terminal ou son navigateur, ou si l’Utilisateur supprime ceux qui y sont enregistrés, l’utilisateur est informé que sa navigation et son expérience sur le site peuvent être limitées. Cela pourrait également être le cas lorsque https://fusiocoat.com/ ou l’un de ses prestataires ne peut pas reconnaître, à des fins de compatibilité technique, le type de navigateur utilisé par le terminal, les paramètres de langue et d’affichage ou le pays depuis lequel le terminal semble connecté à Internet.</p>
                            <p className='text__16 mb-3'>Le cas échéant, https://fusiocoat.com/ décline toute responsabilité pour les conséquences liées au fonctionnement dégradé du Site et des services éventuellement proposés par https://fusiocoat.com/, résultant (i) du refus de cookies par l’Utilisateur (ii) de l’impossibilité pour https://fusiocoat.com/ d’enregistrer ou de consulter les Cookies nécessaires à leur fonctionnement du fait du choix de l’Utilisateur. Pour la gestion des cookies et des choix de l’Utilisateur, la configuration de chaque navigateur est différente. Elle est décrite dans le menu d’aide du navigateur, qui permettra de savoir de quelle manière l’Utilisateur peut modifier ses souhaits en matière de Cookies.</p>
                            <p className='text__16 mb-3'>À tout moment, l’utilisateur peut faire le choix d’exprimer et de modifier ses souhaits en matière de Cookies. https://fusiocoat.com/ pourra en outre faire appel aux services de prestataires externes pour l’aider à recueillir et traiter les informations décrites dans cette section.</p>
                            <p className='text__16 mb-3'>Enfin, en cliquant sur les icônes dédiées aux réseaux sociaux Twitter, Facebook, Linkedin et Google Plus figurant sur le Site de https://fusiocoat.com/ ou dans son application mobile et si l’utilisateur a accepté le dépôt de cookies en poursuivant sa navigation sur le site Internet ou l’application mobile de https://fusiocoat.com/, Twitter, Facebook, Linkedin et Google Plus peuvent également déposer des cookies sur vos terminaux (ordinateur, tablette, téléphone portable).</p>
                            <p className='text__16 mb-3'>Ces types de cookies ne sont déposés sur vos terminaux qu’à condition que vous y consentiez, en continuant votre navigation sur le Site Internet ou l’application mobile de https://fusiocoat.com/. À tout moment, l’utilisateur peut néanmoins revenir sur son consentement à ce que https://fusiocoat.com/ dépose ce type de cookies.</p>
                        </div>



                        <h5 className='font-bold text__32 mb-3'>BALISES (“TAGS”) INTERNET</h5>
                        <div className="mb-3">
                            <p className='text__16 mb-3'>https://fusiocoat.com/ peut employer occasionnellement des balises Internet (également appelées « tags », ou balises d’action, GIF à un pixel, GIF transparents, GIF invisibles et GIF un à un) et les déployer par l’intermédiaire d’un partenaire spécialiste d’analyses Web susceptible de se trouver (et donc de stocker les informations correspondantes, y compris l’adresse IP de l’Utilisateur) dans un pays étranger. Ces balises sont placées à la fois dans les publicités en ligne permettant aux internautes d’accéder au Site, et sur les différentes pages de celui-ci. Cette technologie permet à https://fusiocoat.com/ d’évaluer les réponses des visiteurs face au Site et l’efficacité de ses actions (par exemple, le nombre de fois où une page est ouverte et les informations consultées), ainsi que l’utilisation de ce Site par l’Utilisateur. Le prestataire externe pourra éventuellement recueillir des informations sur les visiteurs du Site et d’autres sites Internet grâce à ces balises, constituer des rapports sur l’activité du Site à l’attention de https://fusiocoat.com/, et fournir d’autres services relatifs à l’utilisation de celui-ci et d’Internet.</p>
                        </div>


                        <h5 className='font-bold text__32 mb-3'>DROIT APPLICABLE ET ATTRIBUTION DE JURIDICTION</h5>
                        <div className="mb-3">
                            <p className='text__16 mb-3'>Tout litige en relation avec l’utilisation du site https://fusiocoat.com/ est soumis au droit Français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Nîmes.</p>
                         </div>

                    </div>
                </div>
            </div>
        </section>
        </Fragment>
        <Footer />
    </div>
</div>
  )
}

export default Legal