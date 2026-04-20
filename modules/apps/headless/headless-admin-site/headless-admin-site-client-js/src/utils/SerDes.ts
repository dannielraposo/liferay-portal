/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

	import {ActionFragmentEditableElementValue} from '../models/ActionFragmentEditableElementValue';
	import {ActionInteraction} from '../models/ActionInteraction';
	import {AnalyticsConfiguration} from '../models/AnalyticsConfiguration';
	import {BackgroundImageFragmentEditableElementValue} from '../models/BackgroundImageFragmentEditableElementValue';
	import {BackgroundImageValue} from '../models/BackgroundImageValue';
	import {BasicFragmentInstancePageElementDefinition} from '../models/BasicFragmentInstancePageElementDefinition';
	import {BasicLayout} from '../models/BasicLayout';
	import {BasicWidgetPageWidgetInstance} from '../models/BasicWidgetPageWidgetInstance';
	import {CategoryFragmentConfigurationFieldValue} from '../models/CategoryFragmentConfigurationFieldValue';
	import {CheckboxFragmentConfigurationFieldValue} from '../models/CheckboxFragmentConfigurationFieldValue';
	import {ClassNameReference} from '../models/ClassNameReference';
	import {ClassSubtypeReference} from '../models/ClassSubtypeReference';
	import {ClientExtension} from '../models/ClientExtension';
	import {CollectionDisplayListStyle} from '../models/CollectionDisplayListStyle';
	import {CollectionDisplayPageElementDefinition} from '../models/CollectionDisplayPageElementDefinition';
	import {CollectionDisplayViewport} from '../models/CollectionDisplayViewport';
	import {CollectionFragmentConfigurationFieldValue} from '../models/CollectionFragmentConfigurationFieldValue';
	import {CollectionItemExternalReference} from '../models/CollectionItemExternalReference';
	import {CollectionItemPageElementDefinition} from '../models/CollectionItemPageElementDefinition';
	import {CollectionReference} from '../models/CollectionReference';
	import {CollectionSettings} from '../models/CollectionSettings';
	import {ColorPaletteFragmentConfigurationFieldValue} from '../models/ColorPaletteFragmentConfigurationFieldValue';
	import {ColorPaletteValue} from '../models/ColorPaletteValue';
	import {ColorPickerFragmentConfigurationFieldValue} from '../models/ColorPickerFragmentConfigurationFieldValue';
	import {ContainerPageElementDefinition} from '../models/ContainerPageElementDefinition';
	import {ContentPageSettings} from '../models/ContentPageSettings';
	import {ContentPageSpecification} from '../models/ContentPageSpecification';
	import {ContentPageTemplate} from '../models/ContentPageTemplate';
	import {ContentPageTemplateSettings} from '../models/ContentPageTemplateSettings';
	import {ContextReference} from '../models/ContextReference';
	import {ContextualMenuNavigationMenuValue} from '../models/ContextualMenuNavigationMenuValue';
	import {CustomMetaTag} from '../models/CustomMetaTag';
	import {DefaultFragmentReference} from '../models/DefaultFragmentReference';
	import {DirectBackgroundImageValue} from '../models/DirectBackgroundImageValue';
	import {DirectFragmentImageValue} from '../models/DirectFragmentImageValue';
	import {DisplayPageActionInteraction} from '../models/DisplayPageActionInteraction';
	import {DisplayPageFormContainerSubmissionResult} from '../models/DisplayPageFormContainerSubmissionResult';
	import {DisplayPageNavigationMenuItemSettings} from '../models/DisplayPageNavigationMenuItemSettings';
	import {DisplayPageTemplate} from '../models/DisplayPageTemplate';
	import {DisplayPageTemplateFolder} from '../models/DisplayPageTemplateFolder';
	import {DisplayPageTemplateOpenGraphSettings} from '../models/DisplayPageTemplateOpenGraphSettings';
	import {DisplayPageTemplateSEOSettings} from '../models/DisplayPageTemplateSEOSettings';
	import {DisplayPageTemplateSettings} from '../models/DisplayPageTemplateSettings';
	import {DropZonePageElementDefinition} from '../models/DropZonePageElementDefinition';
	import {EmbeddedMessageFormContainerSubmissionResult} from '../models/EmbeddedMessageFormContainerSubmissionResult';
	import {EmbeddedPageSettings} from '../models/EmbeddedPageSettings';
	import {EmbeddedPageSpecification} from '../models/EmbeddedPageSpecification';
	import {EmptyCollectionConfig} from '../models/EmptyCollectionConfig';
	import {Facet} from '../models/Facet';
	import {FacetValue} from '../models/FacetValue';
	import {FavIcon} from '../models/FavIcon';
	import {FavIconClientExtension} from '../models/FavIconClientExtension';
	import {FavIconItemExternalReference} from '../models/FavIconItemExternalReference';
	import {FormContainerClassSubtypeReference} from '../models/FormContainerClassSubtypeReference';
	import {FormContainerConfig} from '../models/FormContainerConfig';
	import {FormContainerContextReference} from '../models/FormContainerContextReference';
	import {FormContainerPageElementDefinition} from '../models/FormContainerPageElementDefinition';
	import {FormContainerReference} from '../models/FormContainerReference';
	import {FormFragmentInstancePageElementDefinition} from '../models/FormFragmentInstancePageElementDefinition';
	import {FormStepContainerPageElementDefinition} from '../models/FormStepContainerPageElementDefinition';
	import {FormStepPageElementDefinition} from '../models/FormStepPageElementDefinition';
	import {FragmentConfigurationFieldValue} from '../models/FragmentConfigurationFieldValue';
	import {FragmentDropZonePageElementDefinition} from '../models/FragmentDropZonePageElementDefinition';
	import {FragmentEditableElement} from '../models/FragmentEditableElement';
	import {FragmentEditableElementValue} from '../models/FragmentEditableElementValue';
	import {FragmentEditableElementValueFragmentLink} from '../models/FragmentEditableElementValueFragmentLink';
	import {FragmentImage} from '../models/FragmentImage';
	import {FragmentImageValue} from '../models/FragmentImageValue';
	import {FragmentImageViewport} from '../models/FragmentImageViewport';
	import {FragmentInlineValue} from '../models/FragmentInlineValue';
	import {FragmentInstance} from '../models/FragmentInstance';
	import {FragmentItemExternalReference} from '../models/FragmentItemExternalReference';
	import {FragmentLink} from '../models/FragmentLink';
	import {FragmentLinkInlineValue} from '../models/FragmentLinkInlineValue';
	import {FragmentLinkMappedValue} from '../models/FragmentLinkMappedValue';
	import {FragmentLinkTextValue} from '../models/FragmentLinkTextValue';
	import {FragmentLinkValue} from '../models/FragmentLinkValue';
	import {FragmentMappedValue} from '../models/FragmentMappedValue';
	import {FragmentMappedValueItemContextReference} from '../models/FragmentMappedValueItemContextReference';
	import {FragmentMappedValueItemExternalReference} from '../models/FragmentMappedValueItemExternalReference';
	import {FragmentMappedValueItemReference} from '../models/FragmentMappedValueItemReference';
	import {FragmentReference} from '../models/FragmentReference';
	import {FragmentViewport} from '../models/FragmentViewport';
	import {FragmentViewportStyle} from '../models/FragmentViewportStyle';
	import {FriendlyUrlHistory} from '../models/FriendlyUrlHistory';
	import {GoogleAnalyticsConfiguration} from '../models/GoogleAnalyticsConfiguration';
	import {GridPageElementDefinition} from '../models/GridPageElementDefinition';
	import {GridViewport} from '../models/GridViewport';
	import {HrefURLValue} from '../models/HrefURLValue';
	import {HTMLFragmentEditableElementValue} from '../models/HTMLFragmentEditableElementValue';
	import {HTMLFragmentInlineValue} from '../models/HTMLFragmentInlineValue';
	import {HTMLFragmentMappedValue} from '../models/HTMLFragmentMappedValue';
	import {HTMLFragmentValue} from '../models/HTMLFragmentValue';
	import {HtmlProperties} from '../models/HtmlProperties';
	import {IconImageURL} from '../models/IconImageURL';
	import {ImageFragmentEditableElementValue} from '../models/ImageFragmentEditableElementValue';
	import {ImageValue} from '../models/ImageValue';
	import {ItemExternalReference} from '../models/ItemExternalReference';
	import {ItemFragmentConfigurationFieldValue} from '../models/ItemFragmentConfigurationFieldValue';
	import {ItemImageValue} from '../models/ItemImageValue';
	import {ItemValue} from '../models/ItemValue';
	import {Layout} from '../models/Layout';
	import {LengthFragmentConfigurationFieldValue} from '../models/LengthFragmentConfigurationFieldValue';
	import {LinkFragmentEditableElementValue} from '../models/LinkFragmentEditableElementValue';
	import {LinkToPagePageSettings} from '../models/LinkToPagePageSettings';
	import {LinkToPagePageSpecification} from '../models/LinkToPagePageSpecification';
	import {LinkToURLPageSettings} from '../models/LinkToURLPageSettings';
	import {LinkToURLPageSpecification} from '../models/LinkToURLPageSpecification';
	import {ListStyle} from '../models/ListStyle';
	import {MappedBackgroundImageValue} from '../models/MappedBackgroundImageValue';
	import {MappedFragmentImageValue} from '../models/MappedFragmentImageValue';
	import {MasterPage} from '../models/MasterPage';
	import {ModulePageElementDefinition} from '../models/ModulePageElementDefinition';
	import {ModuleViewport} from '../models/ModuleViewport';
	import {NavigationMenu} from '../models/NavigationMenu';
	import {NavigationMenuFragmentConfigurationFieldValue} from '../models/NavigationMenuFragmentConfigurationFieldValue';
	import {NavigationMenuItem} from '../models/NavigationMenuItem';
	import {NavigationMenuValue} from '../models/NavigationMenuValue';
	import {NavigationSettings} from '../models/NavigationSettings';
	import {NestedApplicationsWidgetPageWidgetInstance} from '../models/NestedApplicationsWidgetPageWidgetInstance';
	import {NestedWidgetSection} from '../models/NestedWidgetSection';
	import {NoneActionInteraction} from '../models/NoneActionInteraction';
	import {NotificationActionInteraction} from '../models/NotificationActionInteraction';
	import {OpenGraphSettings} from '../models/OpenGraphSettings';
	import {PageActionInteraction} from '../models/PageActionInteraction';
	import {PageDisplayPageTemplate} from '../models/PageDisplayPageTemplate';
	import {PageDisplayPageTemplateFolder} from '../models/PageDisplayPageTemplateFolder';
	import {PageElement} from '../models/PageElement';
	import {PageElementDefinition} from '../models/PageElementDefinition';
	import {PageExperience} from '../models/PageExperience';
	import {PageMasterPage} from '../models/PageMasterPage';
	import {PageNavigationMenu} from '../models/PageNavigationMenu';
	import {PageNavigationMenuItemSettings} from '../models/PageNavigationMenuItemSettings';
	import {PagePageElement} from '../models/PagePageElement';
	import {PagePageExperience} from '../models/PagePageExperience';
	import {PagePageSpecification} from '../models/PagePageSpecification';
	import {PagePageTemplate} from '../models/PagePageTemplate';
	import {PagePageTemplateSet} from '../models/PagePageTemplateSet';
	import {PagePermission} from '../models/PagePermission';
	import {PageSetPageSettings} from '../models/PageSetPageSettings';
	import {PageSetPageSpecification} from '../models/PageSetPageSpecification';
	import {PageSettings} from '../models/PageSettings';
	import {PageSite} from '../models/PageSite';
	import {PageSitePage} from '../models/PageSitePage';
	import {PageSpecification} from '../models/PageSpecification';
	import {PageStyleBook} from '../models/PageStyleBook';
	import {PageTemplate} from '../models/PageTemplate';
	import {PageTemplateSet} from '../models/PageTemplateSet';
	import {PageTemplateSettings} from '../models/PageTemplateSettings';
	import {PageUtilityPage} from '../models/PageUtilityPage';
	import {PageWidgetPageWidgetInstance} from '../models/PageWidgetPageWidgetInstance';
	import {Permission} from '../models/Permission';
	import {RatingsTypes} from '../models/RatingsTypes';
	import {RepeatableFieldsCollectionProviderReference} from '../models/RepeatableFieldsCollectionProviderReference';
	import {SelectFragmentConfigurationFieldValue} from '../models/SelectFragmentConfigurationFieldValue';
	import {SEOSettings} from '../models/SEOSettings';
	import {Settings} from '../models/Settings';
	import {Site} from '../models/Site';
	import {SitemapSettings} from '../models/SitemapSettings';
	import {SiteMenuNavigationMenuValue} from '../models/SiteMenuNavigationMenuValue';
	import {SitePage} from '../models/SitePage';
	import {SitePageFormContainerSubmissionResult} from '../models/SitePageFormContainerSubmissionResult';
	import {SitePageNavigationSettings} from '../models/SitePageNavigationSettings';
	import {SitePagesNavigationMenuValue} from '../models/SitePagesNavigationMenuValue';
	import {SitePageURLValue} from '../models/SitePageURLValue';
	import {StayInPageFormContainerSubmissionResult} from '../models/StayInPageFormContainerSubmissionResult';
	import {StyleBook} from '../models/StyleBook';
	import {SuccessFormContainerSubmissionResult} from '../models/SuccessFormContainerSubmissionResult';
	import {SuccessNotificationMessage} from '../models/SuccessNotificationMessage';
	import {TaxonomyCategoryBrief} from '../models/TaxonomyCategoryBrief';
	import {TemplateListStyle} from '../models/TemplateListStyle';
	import {TemplateReference} from '../models/TemplateReference';
	import {TextFragmentConfigurationFieldValue} from '../models/TextFragmentConfigurationFieldValue';
	import {TextFragmentEditableElementValue} from '../models/TextFragmentEditableElementValue';
	import {TextFragmentInlineValue} from '../models/TextFragmentInlineValue';
	import {TextFragmentMappedValue} from '../models/TextFragmentMappedValue';
	import {TextFragmentValue} from '../models/TextFragmentValue';
	import {ThumbnailURLReference} from '../models/ThumbnailURLReference';
	import {URLActionInteraction} from '../models/URLActionInteraction';
	import {URLFormContainerSubmissionResult} from '../models/URLFormContainerSubmissionResult';
	import {URLFragmentConfigurationFieldValue} from '../models/URLFragmentConfigurationFieldValue';
	import {URLImageValue} from '../models/URLImageValue';
	import {URLNavigationMenuItemSettings} from '../models/URLNavigationMenuItemSettings';
	import {URLValue} from '../models/URLValue';
	import {UtilityPage} from '../models/UtilityPage';
	import {UtilityPageSEOSettings} from '../models/UtilityPageSEOSettings';
	import {UtilityPageSettings} from '../models/UtilityPageSettings';
	import {VideoFragmentConfigurationFieldValue} from '../models/VideoFragmentConfigurationFieldValue';
	import {VideoValue} from '../models/VideoValue';
	import {VocabularyNavigationMenuItemSettings} from '../models/VocabularyNavigationMenuItemSettings';
	import {WidgetInstance} from '../models/WidgetInstance';
	import {WidgetInstancePageElementDefinition} from '../models/WidgetInstancePageElementDefinition';
	import {WidgetLookAndFeelConfig} from '../models/WidgetLookAndFeelConfig';
	import {WidgetPageSection} from '../models/WidgetPageSection';
	import {WidgetPageSettings} from '../models/WidgetPageSettings';
	import {WidgetPageSpecification} from '../models/WidgetPageSpecification';
	import {WidgetPageTemplate} from '../models/WidgetPageTemplate';
	import {WidgetPageTemplateSettings} from '../models/WidgetPageTemplateSettings';
	import {WidgetPageWidgetInstance} from '../models/WidgetPageWidgetInstance';

/**
 * @author Rubén Pulido
 * @generated
 */

function endsWith(str: string, match: string): boolean {
	return (
		str.length >= match.length &&
		str.substring(str.length - match.length) === match
	);
}

function startsWith(str: string, match: string): boolean {
	return str.substring(0, match.length) === match;
}

const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";
const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const primitives = new Set([
	"string",
	"boolean",
	"double",
	"integer",
	"long",
	"float",
	"number",
	"any",
]);
const typeMap: {[index: string]: any} = {
	ActionFragmentEditableElementValue,
	ActionInteraction,
	AnalyticsConfiguration,
	BackgroundImageFragmentEditableElementValue,
	BackgroundImageValue,
	BasicFragmentInstancePageElementDefinition,
	BasicLayout,
	BasicWidgetPageWidgetInstance,
	CategoryFragmentConfigurationFieldValue,
	CheckboxFragmentConfigurationFieldValue,
	ClassNameReference,
	ClassSubtypeReference,
	ClientExtension,
	CollectionDisplayListStyle,
	CollectionDisplayPageElementDefinition,
	CollectionDisplayViewport,
	CollectionFragmentConfigurationFieldValue,
	CollectionItemExternalReference,
	CollectionItemPageElementDefinition,
	CollectionReference,
	CollectionSettings,
	ColorPaletteFragmentConfigurationFieldValue,
	ColorPaletteValue,
	ColorPickerFragmentConfigurationFieldValue,
	ContainerPageElementDefinition,
	ContentPageSettings,
	ContentPageSpecification,
	ContentPageTemplate,
	ContentPageTemplateSettings,
	ContextReference,
	ContextualMenuNavigationMenuValue,
	CustomMetaTag,
	DefaultFragmentReference,
	DirectBackgroundImageValue,
	DirectFragmentImageValue,
	DisplayPageActionInteraction,
	DisplayPageFormContainerSubmissionResult,
	DisplayPageNavigationMenuItemSettings,
	DisplayPageTemplate,
	DisplayPageTemplateFolder,
	DisplayPageTemplateOpenGraphSettings,
	DisplayPageTemplateSEOSettings,
	DisplayPageTemplateSettings,
	DropZonePageElementDefinition,
	EmbeddedMessageFormContainerSubmissionResult,
	EmbeddedPageSettings,
	EmbeddedPageSpecification,
	EmptyCollectionConfig,
	Facet,
	FacetValue,
	FavIcon,
	FavIconClientExtension,
	FavIconItemExternalReference,
	FormContainerClassSubtypeReference,
	FormContainerConfig,
	FormContainerContextReference,
	FormContainerPageElementDefinition,
	FormContainerReference,
	FormFragmentInstancePageElementDefinition,
	FormStepContainerPageElementDefinition,
	FormStepPageElementDefinition,
	FragmentConfigurationFieldValue,
	FragmentDropZonePageElementDefinition,
	FragmentEditableElement,
	FragmentEditableElementValue,
	FragmentEditableElementValueFragmentLink,
	FragmentImage,
	FragmentImageValue,
	FragmentImageViewport,
	FragmentInlineValue,
	FragmentInstance,
	FragmentItemExternalReference,
	FragmentLink,
	FragmentLinkInlineValue,
	FragmentLinkMappedValue,
	FragmentLinkTextValue,
	FragmentLinkValue,
	FragmentMappedValue,
	FragmentMappedValueItemContextReference,
	FragmentMappedValueItemExternalReference,
	FragmentMappedValueItemReference,
	FragmentReference,
	FragmentViewport,
	FragmentViewportStyle,
	FriendlyUrlHistory,
	GoogleAnalyticsConfiguration,
	GridPageElementDefinition,
	GridViewport,
	HrefURLValue,
	HTMLFragmentEditableElementValue,
	HTMLFragmentInlineValue,
	HTMLFragmentMappedValue,
	HTMLFragmentValue,
	HtmlProperties,
	IconImageURL,
	ImageFragmentEditableElementValue,
	ImageValue,
	ItemExternalReference,
	ItemFragmentConfigurationFieldValue,
	ItemImageValue,
	ItemValue,
	Layout,
	LengthFragmentConfigurationFieldValue,
	LinkFragmentEditableElementValue,
	LinkToPagePageSettings,
	LinkToPagePageSpecification,
	LinkToURLPageSettings,
	LinkToURLPageSpecification,
	ListStyle,
	MappedBackgroundImageValue,
	MappedFragmentImageValue,
	MasterPage,
	ModulePageElementDefinition,
	ModuleViewport,
	NavigationMenu,
	NavigationMenuFragmentConfigurationFieldValue,
	NavigationMenuItem,
	NavigationMenuValue,
	NavigationSettings,
	NestedApplicationsWidgetPageWidgetInstance,
	NestedWidgetSection,
	NoneActionInteraction,
	NotificationActionInteraction,
	OpenGraphSettings,
	PageActionInteraction,
	PageDisplayPageTemplate,
	PageDisplayPageTemplateFolder,
	PageElement,
	PageElementDefinition,
	PageExperience,
	PageMasterPage,
	PageNavigationMenu,
	PageNavigationMenuItemSettings,
	PagePageElement,
	PagePageExperience,
	PagePageSpecification,
	PagePageTemplate,
	PagePageTemplateSet,
	PagePermission,
	PageSetPageSettings,
	PageSetPageSpecification,
	PageSettings,
	PageSite,
	PageSitePage,
	PageSpecification,
	PageStyleBook,
	PageTemplate,
	PageTemplateSet,
	PageTemplateSettings,
	PageUtilityPage,
	PageWidgetPageWidgetInstance,
	Permission,
	RatingsTypes,
	RepeatableFieldsCollectionProviderReference,
	SelectFragmentConfigurationFieldValue,
	SEOSettings,
	Settings,
	Site,
	SitemapSettings,
	SiteMenuNavigationMenuValue,
	SitePage,
	SitePageFormContainerSubmissionResult,
	SitePageNavigationSettings,
	SitePagesNavigationMenuValue,
	SitePageURLValue,
	StayInPageFormContainerSubmissionResult,
	StyleBook,
	SuccessFormContainerSubmissionResult,
	SuccessNotificationMessage,
	TaxonomyCategoryBrief,
	TemplateListStyle,
	TemplateReference,
	TextFragmentConfigurationFieldValue,
	TextFragmentEditableElementValue,
	TextFragmentInlineValue,
	TextFragmentMappedValue,
	TextFragmentValue,
	ThumbnailURLReference,
	URLActionInteraction,
	URLFormContainerSubmissionResult,
	URLFragmentConfigurationFieldValue,
	URLImageValue,
	URLNavigationMenuItemSettings,
	URLValue,
	UtilityPage,
	UtilityPageSEOSettings,
	UtilityPageSettings,
	VideoFragmentConfigurationFieldValue,
	VideoValue,
	VocabularyNavigationMenuItemSettings,
	WidgetInstance,
	WidgetInstancePageElementDefinition,
	WidgetLookAndFeelConfig,
	WidgetPageSection,
	WidgetPageSettings,
	WidgetPageSpecification,
	WidgetPageTemplate,
	WidgetPageTemplateSettings,
	WidgetPageWidgetInstance,
};

export class ObjectSerializer {
	public static deserialize(data: any, type: string): any {
		type = ObjectSerializer.findCorrectType(data, type);
		if (data === undefined) {
			return data;
		}
		else if (primitives.has(type.toLowerCase())) {
			return data;
		}
		else if (endsWith(type, nullableSuffix)) {
			const subType: string = type.slice(0, -nullableSuffix.length);

			return ObjectSerializer.deserialize(data, subType);
		}
		else if (endsWith(type, optionalSuffix)) {
			const subType: string = type.slice(0, -optionalSuffix.length);

			return ObjectSerializer.deserialize(data, subType);
		}
		else if (startsWith(type, arrayPrefix)) {
			const subType: string = type.slice(
				arrayPrefix.length,
				-arraySuffix.length
			);
			const transformedData: any[] = [];
			for (let index = 0; index < data.length; index++) {
				const datum = data[index];
				transformedData.push(
					ObjectSerializer.deserialize(datum, subType)
				);
			}

			return transformedData;
		}
		else if (startsWith(type, mapPrefix)) {
			const subType: string = type.slice(
				mapPrefix.length,
				-mapSuffix.length
			);
			const transformedData: {[key: string]: any} = {};
			for (const key in data) {
				transformedData[key] = ObjectSerializer.deserialize(
					data[key],
					subType
				);
			}

			return transformedData;
		}
		else if (type === "Date") {
			return new Date(data);
		}
		else {
			if (!typeMap[type]) {
				return data;
			}
			const instance = new typeMap[type]();
			const attributeTypes = typeMap[type].getAttributeTypeMap();
			for (let index = 0; index < attributeTypes.length; index++) {
				const attributeType = attributeTypes[index];
				instance[attributeType.name] = ObjectSerializer.deserialize(
					data[attributeType.baseName],
					attributeType.type
				);
			}

			return instance;
		}
	}

	public static findCorrectType(data: any, expectedType: string) {
		if (data === undefined) {
			return expectedType;
		}
		else if (primitives.has(expectedType.toLowerCase())) {
			return expectedType;
		}
		else if (expectedType === "Date") {
			return expectedType;
		}
		else {
			if (!typeMap[expectedType]) {
				return expectedType;
			}

			const discriminatorProperty = typeMap[expectedType].discriminator;
			if (discriminatorProperty === null) {
				return expectedType;
			}
			else {
				if (data[discriminatorProperty]) {
					const discriminatorType = data[discriminatorProperty];
					if (typeMap[discriminatorType]) {
						return discriminatorType;
					}
					else {
						return expectedType;
					}
				}
				else {
					return expectedType;
				}
			}
		}
	}

	public static serialize(data: any, type: string): any {
		if (data === undefined) {
			return data;
		}
		else if (primitives.has(type.toLowerCase())) {
			return data;
		}
		else if (endsWith(type, nullableSuffix)) {
			const subType: string = type.slice(0, -nullableSuffix.length);

			return ObjectSerializer.serialize(data, subType);
		}
		else if (endsWith(type, optionalSuffix)) {
			const subType: string = type.slice(0, -optionalSuffix.length);

			return ObjectSerializer.serialize(data, subType);
		}
		else if (startsWith(type, arrayPrefix)) {
			const subType: string = type.slice(
				arrayPrefix.length,
				-arraySuffix.length
			);
			const transformedData: any[] = [];
			for (let index = 0; index < data.length; index++) {
				const datum = data[index];
				transformedData.push(
					ObjectSerializer.serialize(datum, subType)
				);
			}

			return transformedData;
		}
		else if (startsWith(type, mapPrefix)) {
			const subType: string = type.slice(
				mapPrefix.length,
				-mapSuffix.length
			);
			const transformedData: {[key: string]: any} = {};
			for (const key in data) {
				transformedData[key] = ObjectSerializer.serialize(
					data[key],
					subType
				);
			}

			return transformedData;
		}
		else if (type === "Date") {
			return data.toISOString();
		}
		else {
			if (!typeMap[type]) {
				return data;
			}

			type = this.findCorrectType(data, type);

			const attributeTypes = typeMap[type].getAttributeTypeMap();
			const instance: {[index: string]: any} = {};
			for (let index = 0; index < attributeTypes.length; index++) {
				const attributeType = attributeTypes[index];
				instance[attributeType.baseName] = ObjectSerializer.serialize(
					data[attributeType.name],
					attributeType.type
				);
			}

			return instance;
		}
	}
}