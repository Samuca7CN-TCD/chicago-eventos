<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Menu;
use App\Models\Submenu;
use App\Models\Client;
use App\Models\Ceremony;
use App\Models\Budget;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response;
     */
    public function index()
    {
        $clients = Client::where('active', 1)->get();
        $ceremonies = Ceremony::all();
        $budgets = Budget::where('status', 1)->get();
        return Inertia::render('Dashboard', [
            'clients' => $clients,
            'budgets' => $budgets,
            'ceremonies' => $ceremonies,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response;
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Inertia\Inertia  $request
     * @return \Inertia\Response;
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Inertia\Response;
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Inertia\Response;
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Inertia\Inertia  $request
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function destroy($id)
    {
        //
    }
}
