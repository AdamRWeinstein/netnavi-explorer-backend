// DEPENDENCIES
const express = require('express')
const { BattleChip } = require('../models')

// CONTROLLERS

// BATTLE CHIP INDEX ACTION
async function index(req, res, next) {
    try {
        res.json(await BattleChip.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
};

// BATTLE CHIP CREATE ACTION
async function create(req, res, next) {
    try {
        res.json(await BattleChip.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
};

// BATTLE CHIP SHOW ACTION
async function show(req, res, next) {
    try {
        res.json(await BattleChip.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
};

// BATTLE CHIP DESTROY ACTION
async function destroy(req, res, next) {
    try {
        res.json(await BattleChip.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
};

// BATTLE CHIP UPDATE ACTION
async function update(req, res, next) {
    try {
        res.json(
            await BattleChip.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        res.status(400).json(error);
    }
};

// EXPORT Controller Action
module.exports = {
    index,
    create,
    show,
    delete: destroy,
    update
}