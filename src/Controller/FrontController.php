<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class FrontController extends AbstractController
{
    /**
     * @Route("/front/{vueRoute}", name="front", defaults={"vueRoute": "/"})
     */
    public function index()
    {
        return $this->render('front/index.html.twig');
    }
}
