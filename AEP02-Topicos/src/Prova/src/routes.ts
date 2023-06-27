import {Router} from 'express'
import pokemonController from './Pokemon/pokemonController'
import teamController from './Team/teamController';

const routes=Router();
// POKEMON
    // GET
routes.get('/SavePokemons',pokemonController.ListPokemons)
routes.get('/MapearPokemons',pokemonController.PokeMaping)
routes.get('/FindPokeByType/:type',pokemonController.FindPokeByType)
routes.get('/FindPokeByDexId/:id',pokemonController.FindPokeByDexId)
routes.get('/FindPokeByName/:name',pokemonController.FindPokeByName)

//TEAM
    // GET
    routes.get('/FindTeamByName/:name',teamController.FindTeamByName)
    routes.get('/FindTeams',teamController.FindTeams)

    // POST
    routes.post('/CreateTeam',teamController.CreateTeam)

    // PUT
    routes.put('/UpdateTeam/:name',teamController.UpdateTeam)

    // DELETE
    routes.delete('/DeleteByName/:name',teamController.DeleteTeamByName)
export default routes