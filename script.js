  / Анимации /
        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideIn {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
        }

        / Адаптивность /
        @media (max-width: 768px) {
            nav {
                flex-direction: column;
                gap: 15px;
            }

            .buttons {
                flex-direction: column;
                gap: 20px;
            }

            header h1 {
                font-size: 2em;
            }

            .description {
                font-size: 1em;
            }

            .buttons a {
                width: 80%;
                justify-content: center;
            }
        }
    
