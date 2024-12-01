# Kreator Menu — Dokumentacja

## Wprowadzenie

Kreator Menu to aplikacja webowa umożliwiająca tworzenie i zarządzanie wielopoziomowymi menu nawigacyjnymi. Pozwala na dodawanie, edytowanie, usuwanie oraz sortowanie elementów menu, w tym zagnieżdżonych podmenu. Stan menu jest przechowywany w `localStorage` przeglądarki, co zapewnia zachowanie zmian między sesjami.

## Funkcjonalności

- **Dodawanie elementów**: Tworzenie nowych pozycji w menu głównym.
- **Zagnieżdżone podmenu**: Tworzenie wielopoziomowych struktur poprzez dodawanie podmenu.
- **Edycja**: Modyfikacja nazwy i linku istniejących elementów.
- **Usuwanie**: Usuwanie elementów wraz z ich podmenu.
- **Przeciąganie i upuszczanie**: Intuicyjne przenoszenie elementów za pomocą funkcji drag-and-drop, zmiana kolejności i poziomu zagnieżdżenia.
- **Automatyczne zapisywanie**: Stan menu jest automatycznie zapisywany w `localStorage`.

## Technologie i Biblioteki

Aplikacja została zbudowana z wykorzystaniem następujących technologii i bibliotek:

- **React**: Biblioteka do budowy interfejsu użytkownika.
- **Next.js**: Framework oparty na React, oferujący funkcjonalności takie jak SSR.
- **TypeScript**: Nadzbiór języka JavaScript z typowaniem statycznym.
- **Tailwind CSS**: Narzędzie do stylowania z podejściem utility-first.
- **@dnd-kit**: Biblioteka do implementacji funkcjonalności drag-and-drop.
- **React Hook Form**: Biblioteka do obsługi formularzy.
- **Lucide-react**: Zestaw ikon dla React.

## Struktura Danych

Aplikacja wykorzystuje strukturę drzewa do reprezentacji menu i jego elementów. Każdy element menu (węzeł drzewa) zawiera:

- **id**: Unikalny identyfikator.
- **label**: Nazwę wyświetlaną w menu.
- **url**: Opcjonalny link.
- **children**: Tablicę zagnieżdżonych elementów (podmenu).

Operacje na drzewie, takie jak dodawanie, usuwanie czy przenoszenie elementów, są zarządzane przez odpowiednie akcje w stanie aplikacji.

## Instalacja i Uruchomienie

### Wymagania

- **Node.js** w wersji 14.x lub nowszej.
- **npm** w wersji 6.x lub nowszej.

### Instalacja

1. **Pobierz repozytorium**:

   ```bash
   git clone git@github.com:GrzegorzSzczepanek/menu-generator.git
   ```

2. **Zainstaluj zależności**:

   ```bash
   npm install --legacy-peer-deps
   ```

   Użycie flagi `--legacy-peer-deps` może być konieczne w celu rozwiązania potencjalnych konfliktów zależności.

### Uruchomienie

Aby uruchomić aplikację w trybie deweloperskim:

```bash
npm run dev
```

Aplikacja domyślnie będzie dostępna pod adresem `http://localhost:3000`.

## Użytkowanie

- **Dodawanie elementów**: Kliknij "Dodaj pozycję menu" i wypełnij formularz.
- **Edycja**: Kliknij "Edytuj" przy wybranym elemencie, aby zmienić jego nazwę lub link.
- **Usuwanie**: Kliknij "Usuń" obok elementu, który chcesz usunąć.
- **Przenoszenie**: Przeciągnij element w nowe miejsce, aby zmienić jego pozycję lub zagnieżdżenie.

- **Problemy z zależnościami**: Jeśli napotkasz błędy podczas instalacji, użyj flagi `--legacy-peer-deps`:

  ```bash
  npm install --legacy-peer-deps
  ```

## Zależności

Główne zależności projektu to:

```json
{
  "dependencies": {
    "@dnd-kit/core": "6.2.0",
    "@dnd-kit/sortable": "9.0.0",
    "lucide-react": "0.462.0",
    "next": "15.0.3",
    "react": "19.0.0-rc-66855b96-20241106",
    "react-dom": "19.0.0-rc-66855b96-20241106",
    "react-hook-form": "7.53.2"
  },
  "devDependencies": {
    "@types/node": "20",
    "@types/react": "18",
    "@types/react-dom": "18",
    "@types/uuid": "10.0.0",
    "eslint": "8",
    "eslint-config-next": "15.0.3",
    "postcss": "8",
    "tailwindcss": "3.4.1",
    "typescript": "5"
  }
}
```
